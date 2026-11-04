// Data proyek portofolio
export const projects = [
  {
    id: "project-1",
    title: "TeenMovie Picks",
    description:
      "Aplikasi web kurasi dan rekomendasi film interaktif yang dirancang khusus untuk remaja dengan filter kategori genre dan klasifikasi usia penonton.",
    image: "/images/teenmovie-picks.jpg",
    imageAlt: "Tampilan Website TeenMovie Picks",
    technologies: ["React", "Tailwind CSS", "Netlify", "API"],
    repositoryUrl: "", // Isi jika ada URL GitHub repository
    liveUrl: "https://thinktap-movie.netlify.app/",
    featured: true,
  },
  {
    id: "project-2",
    title: "Monitoring Tingkat Stres Berbasis Android & ESP32",
    description:
      "Sistem IoT untuk memonitor tingkat stres secara real-time melalui parameter biologis (BPM, Suhu Tubuh, dan GSR) menggunakan mikrokontroler ESP32 yang terhubung ke aplikasi Android.",
    image: "/images/stress-monitoring-esp32.jpg",
    imageAlt: "Tampilan Antarmuka Aplikasi Monitoring Tingkat Stres Android & ESP32",
    technologies: ["IoT", "ESP32", "Android", "Sensors (GSR & BPM)", "Bluetooth / WiFi"],
    repositoryUrl: "", // Isi jika ada URL GitHub repository
    liveUrl: "", // Kosongkan jika belum ada link demo / apk
    featured: true,
  },
];
