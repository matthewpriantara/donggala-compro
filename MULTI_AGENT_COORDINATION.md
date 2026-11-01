# Panduan Kolaborasi Multi-Agent (Orca Worktree)

Dokumen ini adalah aturan koordinasi kerja antara **2 Agent** (misal: Antigravity di Parent & Codex di Child Worktree) pada proyek **Company Profile (`compro`)** agar kedua worktree **tidak bertabrakan (zero conflict)** dan mudah di-merge ke branch `dev`.

---

## 1. Konfigurasi Worktree

| Item | Parent Worktree (Agent 1) | Child Worktree (Agent 2) |
| :--- | :--- | :--- |
| **Lokasi Direktori** | `/Users/matthewpriantara/Documents/coolyeah/KKN/compro` | `/Users/matthewpriantara/orca/workspaces/compro/agent-worker` |
| **Git Branch** | `dev` | `matthewpriantara/agent-worker` |
| **Orca Worktree ID** | `fb16f2c4-91e0-493a-b0b5-e919d45f7038::/Users/matthewpriantara/Documents/coolyeah/KKN/compro` | `fb16f2c4-91e0-493a-b0b5-e919d45f7038::/Users/matthewpriantara/orca/workspaces/compro/agent-worker` |
| **Dev Server Port** | `3000` (`pnpm dev`) | `3001` (`.env.local` PORT=3001) |

---

## 2. Aturan Mutlak Anti-Tabrakan (Zero-Collision Rules)

### A. Isolasi Runtime & Port
- Parent worktree berjalan pada port **3000**.
- Child worktree telah dikonfigurasi dengan `.env.local` pada port **3001**.
- Kedua agent dapat menjalankan `pnpm dev` secara bersamaan tanpa perebutan port.

### B. Pemisahan Domain File (Feature Boundary)
- **Dilarang keras kedua agent mengedit file leaf yang sama pada saat bersamaan.**
- Manfaatkan arsitektur modular di `modules/`:
  - **Agent 1 (Parent):** Fokus pada orkestrasi `app/`, `modules/layout/`, `modules/hero/`, styling tema global.
  - **Agent 2 (Child):** Fokus pada pembuatan/penyempurnaan modul terisolasi, misalnya `modules/services/`, `modules/portfolio/`, `modules/contact/`, atau sub-halaman rute mandiri.
- **Shared Files (`constants/helper.ts`, `globals.css`):**
  - Jika perlu menambah data/class, tambahkan di bagian paling bawah file (*append-only pattern*) untuk memudahkan git auto-merge.

### C. Disiplin Commit
- Setiap agent wajib melakukan commit terhadap file yang diubah di worktree-nya masing-masing sebelum meminta merge.
- Jangan tinggalkan *uncommitted changes* saat proses handoff atau merge.

---

## 3. Cara Menjalankan Agent di Child Worktree

Untuk mengaktifkan Codex (atau agent lain) langsung di terminal child worktree melalui Orca:
```bash
# Melalui Orca CLI:
orca terminal create --worktree "fb16f2c4-91e0-493a-b0b5-e919d45f7038::/Users/matthewpriantara/orca/workspaces/compro/agent-worker" --command "codex"
```
Atau di GUI Orca, klik worktree **`agent-worker`** dan buka tab terminal baru untuk menjalankan `codex`.

---

## 4. Cara Merge Lokal ke `dev` (Parent)

Jika pekerjaan di child worktree sudah selesai dan teruji:

1. Pastikan semua perubahan di child worktree sudah di-commit:
   ```bash
   cd /Users/matthewpriantara/orca/workspaces/compro/agent-worker
   git status
   git add . && git commit -m "feat: deskripsi perubahan"
   ```

2. Jalankan script merge otomatis dari parent worktree:
   ```bash
   pnpm merge:child
   # atau langsung
   bash ./scripts/merge-child.sh
   ```

3. **Apa yang dilakukan script tersebut?**
   - ✅ Memverifikasi kebersihan git di child & parent.
   - 🔀 Menggabungkan `matthewpriantara/agent-worker` ke `dev` dengan `--no-ff`.
   - 🧪 Menjalankan `pnpm build` untuk memastikan tidak ada compile / TypeScript error.
   - 🧹 Memberikan opsi untuk langsung membersihkan child worktree di Orca secara otomatis.
