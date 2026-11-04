# 🌐 Portfolio Website — Alfin Afriza Maulana

Website portofolio pribadi modern, minimalis, dan responsif yang dibangun untuk menampilkan profil profesional, rekam jejak akademis, keahlian teknologi, dan proyek-proyek unggulan di bidang pengembangan web (*Frontend Development*) serta sistem *Internet of Things* (IoT).

🔗 **Live Demo:** [https://alfinafriza.github.io/alfinafrizamaulana.github.io/](https://alfinafriza.github.io/alfinafrizamaulana.github.io/)

---

## 📌 Ringkasan Proyek

Website ini dirancang dengan pendekatan *editorial minimalist* dan mengutamakan tipografi yang bersih, hierarki informasi yang jelas, serta transisi tema (*Light Mode* & *Dark Mode*) yang mulus.

### Fitur Utama:
- 🎨 **Light & Dark Theme Switcher:** Mendukung preferensi sistem operasi dan penyimpanan otomatis di `localStorage` tanpa efek kedip (*theme flash*).
- 🌓 **Alternating Background System:** Pemisahan antar section menggunakan transisi warna background selang-seling yang halus tanpa garis/border kaku.
- 📱 **Fully Responsive:** Layout mobile-first yang nyaman dibuka di berbagai ukuran layar (smartphone, tablet, laptop, dan desktop).
- ⚡ **Data-Driven Architecture:** Seluruh konten (biodata, riwayat pendidikan, proyek, kontak) dikelola terpisah di folder `src/data/`, sehingga sangat mudah diperbarui.
- ♿ **Aksesibilitas & Performa Tinggi:** Mematuhi kaidah semantik HTML, navigasi keyboard ramah screen reader, serta dukungan `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Inter (Google Fonts)
- **Deployment:** GitHub Pages (via GitHub Actions)

---

## 🗂️ Struktur Halaman

1. **Navbar:** Navigasi sticky transparan dengan *backdrop blur* dan tombol pengalih tema.
2. **Hero Section:** Salam pembuka, nama, status fresh graduate/role, deskripsi ringkas, tombol CTA, serta foto profil.
3. **Tentang Saya:** Layout editorial 2 kolom yang merangkum latar belakang pendidikan, spesialisasi *tech stack* (Frontend, Backend, ML/AI, IoT, Tools), dan tautan sosial media.
4. **Proyek Unggulan:** Kartu proyek pilihan dengan preview tangkapan layar, deskripsi, tag teknologi, dan tautan live demo / source code.
5. **Riwayat Pendidikan & Program:** Galeri logo institusi pendidikan dan program studi dengan efek interaktif *grayscale-to-color*.
6. **Kontak (Mari Terhubung):** Kartu tautan komunikasi langsung (Email, GitHub, LinkedIn, Instagram).
7. **Footer:** Hak cipta dinamis dan navigasi sosial media.

---

## 📁 Struktur Direktori

```text
porto2/
├── .github/workflows/   # Workflow otomatisasi deploy GitHub Actions
├── public/              # Aset statis & gambar (logo, foto profil, screenshot proyek)
│   └── images/
│       ├── logos/       # Logo institusi pendidikan
│       └── ...
├── src/
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, Container
│   │   ├── sections/    # Hero, About, Projects, Experience, Contact
│   │   └── ui/          # Button, ProjectCard, ThemeToggle, SectionHeading
│   ├── data/            # Data konten website (profile.js, about.js, projects.js, experience.js)
│   ├── hooks/           # Custom React Hooks (useTheme.js, useScrollReveal.js)
│   ├── App.jsx          # Komponen utama
│   ├── index.css        # Konfigurasi Tailwind CSS v4 & design tokens
│   └── main.jsx         # Entry point aplikasi
├── package.json
└── vite.config.js
```

---

## 🚀 Menjalankan Secara Lokal

Untuk menjalankan proyek ini di komputer lokal Anda:

1. **Clone repository:**
   ```bash
   git clone https://github.com/Alfinafriza/alfinafrizamaulana.github.io.git
   cd alfinafrizamaulana.github.io
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan local development server:**
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173`.

4. **Build untuk production:**
   ```bash
   npm run build
   ```

---

## 📝 Lisensi

Proyek ini dibuat dan dikembangkan oleh **Alfin Afriza Maulana**. Bebas digunakan sebagai referensi atau template portofolio pribadi.
