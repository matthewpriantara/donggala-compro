# Panduan Kolaborasi Multi-Agent (Orca Worktree)

Dokumen ini adalah aturan koordinasi kerja antara **Multi-Agent** (misal: Antigravity di Parent, Codex di Child Worktree 1, dan Agent ke-3 di Child Worktree 2) pada proyek **Company Profile (`compro`)** agar semua worktree **tidak bertabrakan (zero conflict)** dan mudah di-merge ke branch `dev`.

---

## 1. Konfigurasi Worktree

| Item | Parent Worktree (Agent 1) | Child Worktree 1 (Agent 2) | Child Worktree 2 (Agent 3) |
| :--- | :--- | :--- | :--- |
| **Worktree Name** | `dev` *(Utama)* | **`agent-worker`** | **`agent-worker-2`** |
| **Lokasi Direktori** | `/Users/matthewpriantara/Documents/coolyeah/KKN/compro` | `/Users/matthewpriantara/orca/workspaces/compro/agent-worker` | `/Users/matthewpriantara/orca/workspaces/compro/agent-worker-2` |
| **Git Branch** | `dev` | `matthewpriantara/agent-worker` | `matthewpriantara/agent-worker-2` |
| **Orca Worktree ID** | `fb16f2c4-91e0-493a-b0b5-e919d45f7038::/Users/matthewpriantara/Documents/coolyeah/KKN/compro` | `fb16f2c4-91e0-493a-b0b5-e919d45f7038::/Users/matthewpriantara/orca/workspaces/compro/agent-worker` | `fb16f2c4-91e0-493a-b0b5-e919d45f7038::/Users/matthewpriantara/orca/workspaces/compro/agent-worker-2` |
| **Dev Server Port** | `3000` (`pnpm dev`) | **`3001`** (`.env.local` PORT=3001) | **`3002`** (`.env.local` PORT=3002) |

---

## 2. Aturan Mutlak Anti-Tabrakan (Zero-Collision Rules)

### A. Isolasi Runtime & Port
- Parent worktree berjalan pada port **3000**.
- Child worktree 1 berjalan pada port **3001**.
- Child worktree 2 berjalan pada port **3002**.
- Ketiga agent dapat menjalankan dev server secara simultan tanpa port conflict.

### B. Pemisahan Domain File (Feature Boundary)
- **Dilarang keras dua agent mengedit file leaf yang sama pada saat bersamaan.**
- Manfaatkan pembagian modul per feature di `modules/`:
  - **Agent 1 (Parent):** Fokus pada orkestrasi halaman utama `app/`, `modules/layout/`, `modules/hero/`, styling tema global.
  - **Agent 2 (Child 1):** Fokus pada modul fitur tertentu (misal: `modules/about/`, `modules/services/`, `modules/kriya-kuliner/`).
  - **Agent 3 (Child 2):** Fokus pada modul fitur terpisah lainnya (misal: `modules/contact/`, `modules/portfolio/`, atau sub-halaman rute mandiri).
- **Shared Files (`constants/helper.ts`, `globals.css`):**
  - Jika perlu menambah konstanta atau class baru, lakukan penambahan di bagian paling bawah file (*append-only pattern*).

### C. Disiplin Commit
- Setiap agent wajib melakukan commit terhadap file yang diubah di worktree masing-masing sebelum meminta merge.
- Jangan biarkan uncommitted changes saat beralih worktree atau merge.

---

## 3. Cara Menjalankan Agent di Child Worktrees

Untuk mengaktifkan Codex (atau agent lain) langsung di terminal Orca:
```bash
# Untuk Child Worktree 1 (agent-worker):
orca terminal create --worktree "fb16f2c4-91e0-493a-b0b5-e919d45f7038::/Users/matthewpriantara/orca/workspaces/compro/agent-worker" --command "codex"

# Untuk Child Worktree 2 (agent-worker-2):
orca terminal create --worktree "fb16f2c4-91e0-493a-b0b5-e919d45f7038::/Users/matthewpriantara/orca/workspaces/compro/agent-worker-2" --command "codex"
```
Atau di GUI Orca, klik tab/workspace **`agent-worker`** atau **`agent-worker-2`** pada sidebar dan buka tab terminal baru.

---

## 4. Cara Merge Lokal ke `dev` (Parent)

Jika pekerjaan di salah satu child worktree sudah selesai:

1. **Pastikan commit sudah dilakukan di child worktree:**
   ```bash
   cd /Users/matthewpriantara/orca/workspaces/compro/agent-worker-2
   git status
   git add . && git commit -m "feat: pekerjaan agent worker 2"
   ```

2. **Jalankan script merge dari parent worktree:**
   ```bash
   # Merge Child 1:
   pnpm merge:child 1
   # atau
   bash ./scripts/merge-child.sh agent-worker

   # Merge Child 2:
   pnpm merge:child 2
   # atau
   bash ./scripts/merge-child.sh agent-worker-2
   ```

Script [`scripts/merge-child.sh`](file:///Users/matthewpriantara/Documents/coolyeah/KKN/compro/scripts/merge-child.sh) akan otomatis:
- ✅ Memverifikasi kebersihan git.
- 🔀 Menggabungkan branch target ke `dev` (`--no-ff`).
- 🧪 Menjalankan `pnpm build` untuk memverifikasi integritas build.
- 🧹 Memberikan opsi untuk membersihkan child worktree di Orca secara otomatis.
