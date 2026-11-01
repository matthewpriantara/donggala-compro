export const HEALTH_UI = {
  eyebrow: "KENALI HASIL PEMERIKSAAN",
  title: "Baca angkanya, pahami langkah berikutnya.",
  intro:
    "Masukkan hasil dari alat ukur atau pemeriksaan laboratorium. Website membantu membaca angka, bukan mengukur kondisi tubuh atau menegakkan diagnosis.",
  scope:
    "Panduan untuk dewasa usia 20 tahun ke atas yang tidak sedang hamil. Anak, ibu hamil, serta orang dengan target khusus dari dokter perlu penilaian langsung tenaga kesehatan.",
  consent: "Saya berusia 20 tahun atau lebih dan tidak sedang hamil.",
  open: "Cek hasil",
  formTitle: "Isi hasil pengukuran",
  submit: "Lihat hasil",
  reset: "Kosongkan",
  result: "Hasil pembacaan",
  advice: "Langkah berikutnya",
  disclaimer:
    "Hasil ini merupakan informasi edukasi, bukan diagnosis. Konfirmasikan bersama tenaga kesehatan. Jangan memulai, menghentikan, atau mengubah dosis obat berdasarkan hasil website.",
  privacy:
    "Angka diproses di browser, tanpa dikirim atau disimpan sebagai riwayat pemeriksaan.",
  back: "Semua layanan kesehatan",
  more: "Pemeriksaan lainnya",
  sources: "Rujukan medis",
  checked: "Ditinjau dari sumber pada 1 November 2026",
  error:
    "Isi seluruh angka dengan nilai positif yang valid. Gunakan satuan yang tercantum.",
  pressureError:
    "Sistolik harus lebih besar daripada diastolik. Periksa kembali angka di alat ukur.",
  rangeError:
    "Batas bawah rentang laboratorium harus lebih kecil daripada batas atas.",
  severe:
    "Jika ada nyeri dada, sesak napas, pingsan, kebingungan, atau kelemahan mendadak, segera ke IGD atau hubungi 119, berapa pun hasil angkanya.",
  call: "Hubungi 119",
  value: "Nilai pemeriksaan",
  systolic: "Sistolik",
  diastolic: "Diastolik",
  context: "Waktu pemeriksaan",
  fasting: "Puasa minimal 8 jam (air putih boleh)",
  random: "Sewaktu / tidak puasa",
  lower: "Batas bawah laboratorium",
  upper: "Batas atas laboratorium",
  rangeHelp:
    "Salin rentang rujukan dari laporan laboratorium dalam mg/dL. Rentang dapat berbeda menurut laboratorium dan jenis kelamin. Target pengobatan gout berbeda dari rentang ini; ikuti dokter.",
} as const;
export const HEALTH_CHECKS = {
  "tekanan-darah": {
    label: "Tekanan darah",
    unit: "mmHg",
    description: "Baca angka sistolik dan diastolik dari tensimeter.",
    preparation:
      "Istirahat sedikitnya lima menit. Duduk dengan kaki menapak, lengan disangga setinggi jantung, dan jangan berbicara. Ulangi pengukuran dengan jeda satu menit.",
    reference:
      "Acuan AHA: normal <120 dan <80; meningkat 120–129 dan <80; tahap 1 ≥130 atau ≥80; tahap 2 ≥140 atau ≥90 mmHg. Kategori mengikuti angka yang lebih tinggi; nilai rendah dinilai terpisah.",
    sources: [
      {
        label: "AHA · kategori tekanan darah",
        url: "https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings",
      },
      {
        label: "AHA · tekanan darah rendah",
        url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/low-blood-pressure-when-blood-pressure-is-too-low",
      },
    ],
  },
  "gula-darah": {
    label: "Gula darah",
    unit: "mg/dL",
    description: "Pilih waktu pemeriksaan sebelum memasukkan angka glukosa.",
    preparation:
      "Gunakan hasil glukometer atau laboratorium. Pilih puasa hanya jika tidak mengonsumsi kalori sedikitnya delapan jam. Hasil glukometer bukan dasar diagnosis diabetes.",
    reference:
      "Puasa: 70–<100 dalam acuan, 100–<126 meningkat, ≥126 perlu konfirmasi. Sewaktu ≥200 perlu evaluasi; nilai di bawahnya tidak dapat memastikan normal atau menyingkirkan diabetes. Nilai <70 mg/dL termasuk rendah.",
    sources: [
      {
        label: "NIDDK · pemeriksaan diabetes",
        url: "https://www.niddk.nih.gov/health-information/diabetes/overview/tests-diagnosis",
      },
      {
        label: "CDC · gula darah rendah",
        url: "https://www.cdc.gov/diabetes/treatment/treatment-low-blood-sugar-hypoglycemia.html",
      },
      {
        label: "CDC · ketoasidosis",
        url: "https://www.cdc.gov/diabetes/about/diabetic-ketoacidosis.html",
      },
    ],
  },
  kolesterol: {
    label: "Kolesterol total",
    unit: "mg/dL",
    description:
      "Gunakan nilai kolesterol total, bukan LDL, HDL, atau trigliserida.",
    preparation:
      "Salin angka kolesterol total dalam mg/dL. Ikuti persiapan tes yang diminta laboratorium. Penilaian risiko juga memerlukan LDL, HDL, riwayat penyakit, dan faktor risiko lain.",
    reference:
      "Kolesterol total dewasa: <200 diharapkan, 200–<240 batas tinggi, dan ≥240 mg/dL tinggi. Nilai total saja tidak memastikan risiko jantung rendah.",
    sources: [
      {
        label: "MedlinePlus · kolesterol",
        url: "https://medlineplus.gov/lab-tests/cholesterol-levels/",
      },
      {
        label: "NHLBI · kategori kolesterol total",
        url: "https://www.nhlbi.nih.gov/files/docs/public/heart/cholesterol-chol.pdf",
      },
    ],
  },
  "asam-urat": {
    label: "Asam urat",
    unit: "mg/dL",
    description:
      "Bandingkan nilai asam urat dengan rentang pada laporan laboratorium.",
    preparation:
      "Siapkan angka pemeriksaan serta batas bawah dan atas yang tertulis pada laporan laboratorium. Kadar asam urat saja tidak memastikan atau menyingkirkan gout.",
    reference:
      "Hasil dibandingkan dengan rentang laboratorium yang Anda masukkan, termasuk kedua batasnya. Target untuk pasien yang menjalani pengobatan gout dapat lebih rendah; konsultasikan dengan dokter.",
    sources: [
      {
        label: "MedlinePlus · pemeriksaan asam urat",
        url: "https://medlineplus.gov/ency/article/003476.htm",
      },
    ],
  },
} as const;
export type HealthSlug = keyof typeof HEALTH_CHECKS;
export const HEALTH_RESULTS = {
  bpNormal: {
    title: "Dalam rentang normal",
    text: "Kedua angka berada dalam kategori normal AHA.",
    advice: [
      "Catat hasil dan pantau secara berkala.",
      "Pertahankan aktivitas fisik, pola makan seimbang, dan tidur cukup.",
    ],
  },
  bpLow: {
    title: "Ada angka tekanan darah rendah",
    text: "Sistolik kurang dari 90 atau diastolik kurang dari 60 mmHg. Keluhan dan pola hasil perlu dinilai bersama.",
    advice: [
      "Duduk atau berbaring bila pusing; bangun perlahan.",
      "Ulangi pengukuran dan konsultasikan bila berulang atau bergejala.",
    ],
  },
  bpElevated: {
    title: "Tekanan darah meningkat",
    text: "Sistolik meningkat sementara diastolik belum masuk kategori tinggi.",
    advice: [
      "Ulangi pengukuran setelah istirahat dan catat beberapa hasil.",
      "Kurangi garam dan diskusikan hasil yang menetap dengan tenaga kesehatan.",
    ],
  },
  bpStage1: {
    title: "Rentang hipertensi tahap 1",
    text: "Sedikitnya satu angka masuk kategori tahap 1 AHA. Satu pengukuran belum menetapkan hipertensi.",
    advice: [
      "Catat pengukuran ulang dan jadwalkan konsultasi.",
      "Bawa catatan hasil serta daftar obat saat konsultasi.",
    ],
  },
  bpStage2: {
    title: "Rentang hipertensi tahap 2",
    text: "Sedikitnya satu angka masuk kategori tahap 2 AHA.",
    advice: [
      "Hubungi tenaga kesehatan untuk evaluasi dan rencana tindak lanjut.",
      "Jangan menyesuaikan obat sendiri.",
    ],
  },
  bpUrgent: {
    title: "Tekanan darah sangat tinggi",
    text: "Sistolik ≥180 atau diastolik ≥120 mmHg perlu perhatian segera.",
    advice: [
      "Jika disertai gejala bahaya, segera ke IGD atau hubungi 119.",
      "Tanpa gejala, istirahat satu menit lalu ukur ulang. Jika tetap sangat tinggi, segera hubungi tenaga kesehatan.",
    ],
  },
  glucoseLow: {
    title: "Gula darah rendah",
    text: "Nilai kurang dari 70 mg/dL memerlukan penanganan segera.",
    advice: [
      "Jika sadar dan bisa menelan, konsumsi 15 gram karbohidrat cepat serap, lalu periksa kembali setelah 15 menit. Ulangi bila masih <70.",
      "Bila pingsan, bingung, kejang, atau sulit menelan, jangan berikan makanan/minuman lewat mulut; segera hubungi 119.",
    ],
  },
  glucoseSevereLow: {
    title: "Gula darah sangat rendah",
    text: "Nilai di bawah 55 mg/dL berbahaya dan dapat mengganggu kemampuan menolong diri.",
    advice: [
      "Minta bantuan orang di sekitar dan segera cari pertolongan medis.",
      "Bila tidak sadar atau sulit menelan, jangan berikan makanan/minuman lewat mulut. Hubungi 119.",
    ],
  },
  glucoseNormal: {
    title: "Gula darah puasa dalam acuan",
    text: "Nilai puasa berada pada 70 hingga kurang dari 100 mg/dL.",
    advice: [
      "Pertahankan makan teratur dan aktivitas fisik.",
      "Tetap konsultasi jika ada gejala atau faktor risiko meskipun angka ini dalam acuan.",
    ],
  },
  glucoseRaised: {
    title: "Gula darah puasa meningkat",
    text: "Nilai puasa berada pada rentang 100 hingga kurang dari 126 mg/dL, yang digunakan untuk skrining pradiabetes.",
    advice: [
      "Konsultasikan untuk konfirmasi dengan pemeriksaan laboratorium.",
      "Batasi minuman manis dan pertahankan aktivitas fisik sesuai kemampuan.",
    ],
  },
  glucoseHigh: {
    title: "Gula darah tinggi, perlu konfirmasi",
    text: "Nilai memenuhi ambang yang memerlukan evaluasi diabetes. Diagnosis perlu konteks gejala dan pemeriksaan tenaga kesehatan.",
    advice: [
      "Buat janji pemeriksaan di puskesmas atau dokter.",
      "Jika disertai muntah, napas cepat, nyeri perut, atau mengantuk berat, segera ke IGD.",
    ],
  },
  glucoseUrgent: {
    title: "Gula darah sangat tinggi",
    text: "Nilai ≥300 mg/dL perlu segera ditindaklanjuti, terutama bila menetap.",
    advice: [
      "Hubungi tenaga kesehatan segera. Jika hasil tetap ≥300 atau ada muntah, sulit bernapas, maupun penurunan kesadaran, segera ke IGD.",
      "Jangan menambah dosis obat atau insulin tanpa rencana yang diberikan dokter.",
    ],
  },
  glucoseRandom: {
    title: "Belum dapat menentukan kategori",
    text: "Gula darah sewaktu di bawah 200 mg/dL tidak cukup untuk menyimpulkan normal atau menyingkirkan diabetes.",
    advice: [
      "Diskusikan kebutuhan tes puasa atau HbA1c bersama tenaga kesehatan.",
      "Tetap periksa bila sering haus, sering berkemih, atau berat badan turun tanpa sebab.",
    ],
  },
  cholesterolNormal: {
    title: "Kolesterol total dalam acuan",
    text: "Nilai total di bawah 200 mg/dL berada pada kategori yang diharapkan untuk dewasa.",
    advice: [
      "Tetap perhatikan LDL, HDL, dan faktor risiko bersama dokter.",
      "Pertahankan makan seimbang dan aktivitas fisik teratur.",
    ],
  },
  cholesterolBorder: {
    title: "Kolesterol total pada batas tinggi",
    text: "Nilai total berada pada 200 hingga kurang dari 240 mg/dL.",
    advice: [
      "Diskusikan pemeriksaan profil lipid dan risiko jantung.",
      "Batasi lemak jenuh dan pilih makanan kaya serat.",
    ],
  },
  cholesterolHigh: {
    title: "Kolesterol total tinggi",
    text: "Nilai kolesterol total mencapai 240 mg/dL atau lebih.",
    advice: [
      "Jadwalkan evaluasi profil lipid bersama tenaga kesehatan.",
      "Penanganan bergantung pada risiko keseluruhan; jangan memilih obat sendiri.",
    ],
  },
  uricLow: {
    title: "Di bawah rentang laboratorium",
    text: "Nilai lebih rendah daripada batas bawah yang Anda masukkan.",
    advice: [
      "Konfirmasikan hasil, obat, dan kondisi kesehatan dengan dokter.",
      "Jangan mencoba menaikkan asam urat melalui perubahan makan tanpa arahan.",
    ],
  },
  uricNormal: {
    title: "Dalam rentang laboratorium",
    text: "Nilai berada dalam rentang yang Anda masukkan. Ini tidak menyingkirkan gout atau menentukan target pengobatan.",
    advice: [
      "Bila ada nyeri atau bengkak sendi, tetap periksakan diri.",
      "Ikuti target khusus dokter jika sedang menjalani pengobatan gout.",
    ],
  },
  uricHigh: {
    title: "Di atas rentang laboratorium",
    text: "Nilai melebihi batas atas yang Anda masukkan. Hasil ini sendiri belum memastikan gout.",
    advice: [
      "Konsultasikan hasil dan keluhan sendi kepada tenaga kesehatan.",
      "Batasi alkohol dan jeroan. Cukupi cairan sesuai anjuran dokter, terutama bila ada pembatasan cairan.",
    ],
  },
} as const;
