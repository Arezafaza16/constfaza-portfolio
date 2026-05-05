export const DEVELOPER_INFO = {
  name: "Areza Faza",
  title: "Software Engineer Full Stack",
  description: "Seorang software engineer yang sangat termotivasi dengan pengalaman selama 4 tahun dan memiliki semangat tinggi dalam menciptakan solusi inovatif. Spesialis dalam membangun aplikasi web yang skalabel dan alat lintas-platform berperforma tinggi.",
  email: "Arezafaza@gmail.com",
  github: "https://github.com/arezafaza",
  linkedin: "https://linkedin.com/in/arezafaza",
  skills: [
    "React", "Vite", "TypeScript", "Next.js", "NestJS", "Express", 
    "Fastify", "MongoDB", "Firebase", "PostgreSQL", "JavaScript", "Python"
  ],
  experience: [
    {
      company: "ConstFaza Studio.",
      role: "Freelance Software Engineer",
      period: "2023 - Sekarang",
      description: "Mendesain dan membangun aplikasi SaaS berkinerja tinggi secara end-to-end dengan fokus pada scalability, reliability, dan user experience. Mengoptimalkan performa sistem hingga 40% melalui refactoring, query tuning, dan strategi indexing database. Berpengalaman bekerja langsung dengan klien dalam merancang solusi teknis yang selaras dengan tujuan bisnis dan menghasilkan produk yang siap digunakan secara production-grade."
      },
    {
      company: "Creative Solutions Ltd.",
      role: "Software Engineer",
      period: "2021 - 2023",
      description: "Mengembangkan dan memelihara berbagai proyek klien dengan fokus pada React dan Express. Mengimplementasikan fitur real-time menggunakan WebSockets dan Firebase."
    },
    {
      company: "Hacktiv8",
      role: "Junior Developer",
      period: "2020 - 2021",
      description: "Membantu membangun MVP untuk beberapa startup tahap awal. Mendapatkan pengalaman luas dalam TypeScript dan manajemen basis data dengan MongoDB."
    }
  ],
  projects: [
    {
      title: "TravelDash",
      description: "Website Travel Agent dengan fitur reservasi dan booking Via Whatsapp.",
      tech: ["React Vite", "Tailwindcss", "Gsap"],
      image: "/landing-preview.png",
      link: "https://travel2-ruddy.vercel.app/"
    },
    {
      title: "TravelDash Dashboard",
      description: "Dashboard untuk pengeditan data pada website TravelDash.",
      tech: ["reactVite", "Tailwindcss"],
      image: "dashboard-preview.png",
      link: "https://dashboard-travel2.vercel.app/login"
    },
    {
      title: "TravelDash Backend",
      description: "Backend untuk website TravelDash.",
      tech: ["TypeScript", "NestJS"],
      image: "/backend-travel.png",
      link: "https://github.com/Arezafaza16/fullstack-travel/tree/master/dashboard/nestjs"
    },
    {
      title: "Civilize Company Profile",
      description: "Civilize hadir sebagai mitra konstruksi terpercaya dengan pengalaman lebih dari 25 tahun dalam membangun infrastruktur berkualitas tinggi di seluruh Indonesia.",
      tech: ["TypeScript", "NextJs", "Gsap", "Tailwindcss"],
      image: "/civilize.png",
      link: "https://civilize-compro.vercel.app/"
    },
    {
      title: "Aurelian Journey",
      description: "Aurelian Journey merupakan website travel yang memberikan kesan mewah dan elegan, dengan style story telling yang mampu membawa pengunjung terhanyut dalam suasana fantasy liburan. Website ini sudah di lengkapi denga fitur Payment Gateway menggunakan Midtrans(Sandbox).",
      tech: ["React Vite", "Tailwindcss", "Gsap"],
      image: "/aurelian.png",
      link: "https://aurelian-journey.vercel.app/"
    },
    {
      title: "Bali Concierge",
      description: "Bali Concierge merupakan website travel untuk tur guide yang berfokus pada wisata watersport dan Alam. Website ini dilengkapi fitur Payment Gateway menggunakan Midtrans(Sandbox). Dan mengimplementasikan fitur automatic whatsapp sender dimana setiap kali user melakukan booking, admin akan otomatis menerima data user berikut OTP via whatsapp. Untuk melakukan test pembayaran: 1. Pilih paket, 2. Pilih tanggal dan jumlah guest, 3. Click 'Check Avalaibility', 4. Click 'Book Now', 5. Klik 'Continue to Payment'. 6. Pilih metode pembayaran, 7. Pergi ke alamat 'https://simulator.sandbox.midtrans.com/' lalu pilih metode pembayaran yang sebelum nya di pilih, contoh: Virtual Acccount -> BCA VA, 8. Masukan kode VA lalu klik inquire, 9. Balik ke halaman baliconcierge lalu klik 'check status' untuk melihat status pembayaran. Kemudian OTP akan muncul. Whatsapp Admin akan menerima data anda dan kode OTP anda.",
      tech: ["React Vite", "Tailwindcss", "Gsap", "NestJs", "MongoDB", "Fonnte", "Midtrans"],
      image: "/bali-concierge.png",
      link: "https://baliconcierge.vercel.app"
    }
  ]
};
