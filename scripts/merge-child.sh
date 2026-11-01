#!/usr/bin/env bash
set -euo pipefail

# Script untuk melakukan merge lokal child worktree ke parent branch (dev)
# Usage:
#   ./scripts/merge-child.sh              (default: agent-worker)
#   ./scripts/merge-child.sh 2            (merges agent-worker-2)
#   ./scripts/merge-child.sh agent-worker-2
#   ./scripts/merge-child.sh <branch-name> [worktree-path]

INPUT_ARG="${1:-agent-worker}"

case "$INPUT_ARG" in
  "1"|"agent-worker"|"matthewpriantara/agent-worker")
    CHILD_BRANCH="matthewpriantara/agent-worker"
    CHILD_NAME="agent-worker"
    ;;
  "2"|"agent-worker-2"|"matthewpriantara/agent-worker-2")
    CHILD_BRANCH="matthewpriantara/agent-worker-2"
    CHILD_NAME="agent-worker-2"
    ;;
  *)
    CHILD_BRANCH="$INPUT_ARG"
    CHILD_NAME="${INPUT_ARG##*/}"
    ;;
esac

CHILD_PATH="${2:-/Users/matthewpriantara/orca/workspaces/compro/$CHILD_NAME}"
PARENT_PATH="/Users/matthewpriantara/Documents/coolyeah/KKN/compro"
CHILD_WORKTREE_ID="fb16f2c4-91e0-493a-b0b5-e919d45f7038::$CHILD_PATH"

echo "=========================================================="
echo "🔄 [Orca Merge] Memulai merge child worktree ke dev (parent)"
echo "   Target Child    : $CHILD_NAME"
echo "   Branch Child    : $CHILD_BRANCH"
echo "   Child Worktree  : $CHILD_PATH"
echo "   Parent Worktree : $PARENT_PATH (branch: dev)"
echo "=========================================================="

# 1. Cek status uncommitted di child worktree jika foldernya ada
if [ -d "$CHILD_PATH" ]; then
  if [ -n "$(git -C "$CHILD_PATH" status --porcelain)" ]; then
    echo "❌ ERROR: Child worktree '$CHILD_NAME' masih memiliki perubahan yang belum di-commit!"
    echo "Silakan commit terlebih dahulu di child worktree:"
    echo "   cd $CHILD_PATH && git add . && git commit -m '...'"
    exit 1
  fi
  echo "✅ Child worktree bersih (tidak ada uncommitted changes)."
fi

# 2. Pindah ke parent worktree
cd "$PARENT_PATH"

# Pastikan di branch dev
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "dev" ]; then
  echo "⚠️  Parent worktree sedang di branch '$CURRENT_BRANCH'. Berpindah ke 'dev'..."
  git checkout dev
fi

# Cek apakah parent worktree bersih
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ ERROR: Parent worktree (dev) memiliki uncommitted changes!"
  echo "Silakan commit atau stash perubahan di dev sebelum melakukan merge."
  exit 1
fi

# 3. Lakukan merge non-fast-forward
echo "🔀 Menggabungkan branch '$CHILD_BRANCH' ke 'dev'..."
git merge "$CHILD_BRANCH" --no-ff -m "merge: integrate child worktree ($CHILD_BRANCH) into dev"

# 4. Validasi Build
echo "🧪 Menjalankan validasi build (pnpm build)..."
if pnpm build; then
  echo "✅ Build validasi berhasil tanpa error!"
else
  echo "❌ Build gagal setelah merge! Silakan periksa error di atas."
  exit 1
fi

# 5. Membersihkan child worktree di Orca (opsional / otomatis)
echo "----------------------------------------------------------"
echo "🎉 Merge lokal ke 'dev' SELESAI & TERVERIFIKASI!"
echo ""
echo "Apakah kamu ingin menghapus child worktree di Orca sekarang? (y/N)"
read -r -t 10 CONFIRM || CONFIRM="n"
if [[ "$CONFIRM" =~ ^[Yy]$ ]]; then
  echo "🧹 Menghapus child worktree di Orca..."
  orca worktree rm --worktree "$CHILD_WORKTREE_ID" 2>/dev/null || true
  git branch -d "$CHILD_BRANCH" 2>/dev/null || true
  echo "✅ Child worktree '$CHILD_NAME' berhasil dibersihkan."
else
  echo "ℹ️  Child worktree dipertahankan. Jika nanti ingin menghapus secara manual:"
  echo "   orca worktree rm --worktree \"$CHILD_WORKTREE_ID\""
  echo "   git branch -d \"$CHILD_BRANCH\""
fi
echo "=========================================================="
