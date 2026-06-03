import { TranslationType } from "./en";

// Dengan memanggil ': TranslationType', TS akan protes kalau kamu salah ketik kunci
export const id: TranslationType = {
  hero: {
    greeting: "Hai, saya Privanza Wisnu Aqilanndra",
    description: "Ini adalah halaman utama portofolio kamu yang siap di-kustomisasi.",
    viewMyWork: "Lihat Karya Saya",
    viewResume: "Lihat CV",
    contactMe: "Hubungi Saya",
  },
  skills: {
    description: "Ini adalah halaman Kemampuan & Teknologi kamu yang siap di-kustomisasi.",
    progLang: "Bahasa Pemrograman",
    frLib: "Kerangka Kerja & Pustaka",
    tlSft: "Alat & Perangkat Lunak",
    lang: "Bahasa",
    levels: {
      beginner: "Pemula",
      basic: "Dasar",
      intermediate: "Menengah",
      advanced: "Mahir",
      expert: "Ahli"
    }
  },
  projects: {
    description: "Ini adalah halaman Proyek Saya yang siap di-kustomisasi.",
  },
  certifications: {
    description: "Ini adalah halaman Sertifikasi saya yang siap di-kustomisasi.",
  },
  contact: {
    title: "Hubungi Saya",
    description: "Punya ide proyek atau peluang kerja yang menarik? Kirimkan saya pesan!",
    nameLabel: "Nama Lengkap",
    emailLabel: "Email Anda",
    messageLabel: "Pesan",
    messagePlaceholder: "Ketik pesan Anda di sini...",
    sendButton: "Kirim Pesan",
    sending: "Mengirim...",
    successMessage: "Pesan berhasil dikirim! Saya akan segera menghubungi Anda.",
  },
  header: {
    settingsLabel: "Pengaturan",
    openSettings: "Buka Pengaturan",
    language: "🇮🇩 ID",
    languageSwitchTitle: "Pindah ke Bahasa Inggris",
  },
  menu: {
    overview: "Ringkasan",
    skills: "Kemampuan & Teknologi",
    projects: "Proyek Saya",
    certifications: "Sertifikasi",
    contact: "Hubungi Saya",
  },
  settings: {
    preferences: "Pengaturan",
    appearance: "Tampilan",
    light: "Terang",
    dark: "Gelap",
    system: "Sistem",
    fontFamily: "Jenis Huruf",
    fontSize: "Ukuran Huruf",
    sizes: {
      small: "Kecil",
      default: "Standar",
      large: "Besar",
      "extra-large": "Sangat Besar",
    },
    themeColor: "Warna Tema",
    pickThemeColor: "Pilih warna brand kamu",
    reduceMotion: "Kurangi Gerakan",
    reduceMotionDesc: "Nonaktifkan animasi untuk performa",
    resetDefault: "Atur Ulang ke Default",
    cancel: "Batal",
    saveChanges: "Simpan Perubahan",
  },
  resume:{
    description: "Lihat langsung atau unduh salinannya.",
    download: "Unduh CV"
  }
};