import HeroImage from "/assets/hero-img2.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/php.png";
import Tools3 from "/assets/tools/laravel.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/mysql.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/figma.png";
import Tools10 from "/assets/tools/canva.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "PHP",
    ket: "Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "MySQL",
    ket: "Database",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Figma",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Melodify",
    desk: "Sebuah desain antarmuka aplikasi pemutar musik modern dengan fokus pada kemudahan navigasi dan pengalaman pengguna yang intuitif.",
    tools: ["Figma"],
    link: "https://www.figma.com/proto/XM1a8PoAnxpsPiX2VrvdpK/Melodify?node-id=3-2&p=f&t=YdvLkOsL0uVGgc5N-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "KosMe",
    desk: "Sebuah website pemesanan kamar kos berbasis online. Menyediakan fitur booking, pencarian, login, dan pembayaran.",
    tools: ["Laravel", "Tailwind CSS", "MySQL"],
    link: "https://kosme.my.id/",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Six Dots",
    desk: "Sebuah desain aplikasi edukatif untuk membantu tunanetra dalam mengenal dan belajar huruf Braille secara mandiri.",
    tools: ["Figma"],
    link: "https://www.figma.com/proto/IIZk1wUwu6jvfMWK9VTudw/Six-Dots--Copy-?node-id=2-3592&t=tvexHiY7DpSkuuCf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3422",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Devvify",
    desk: "Sebuah website penyedia layanan digital kreatif yang menawarkan jasa pembuatan website, mobile app, UI/UX design, serta analisis data.",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    link: "https://dinaraaulia.github.io/Devvify/",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Sebuah website pribadi yang menampilkan informasi tentang diri saya, minat, serta berbagai proyek yang telah saya kerjakan.",
    tools: ["Laravel", "PHP", "CSS", "Javascript"],
    link: "https://github.com/DinaraAulia/Dinara-s-Website",
    dad: "600",
  },
];
