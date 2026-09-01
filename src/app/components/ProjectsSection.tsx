import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Tab = "software" | "data" | "branding" | "docs";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  image: string;
  links?: { label: string; url: string; type: "github" | "live" }[];
  featured?: boolean;
  color: string;
}

const tabs: { id: Tab; label: string; emoji: string }[] = [
  { id: "software", label: "Software Engineering", emoji: "💻" },
  { id: "data", label: "Data & Analytics", emoji: "📊" },
  { id: "branding", label: "Branding & Business", emoji: "🎨" },
  { id: "docs", label: "Docs & Management", emoji: "📋" },
];

const projects: Record<Tab, Project[]> = {
  software: [
    {
      id: "se1",
      title: "Sistem Informasi Manajemen Apotek",
      subtitle: "Full-Stack Web Development",
      desc: "Mengembangkan sistem informasi manajemen inventaris farmasi berbasis web menggunakan ekosistem JavaScript (Node.js) dan sistem basis data relasional (Sequelize/MySQL). Mengimplementasikan algoritma rotasi stok berbasis First Expired, First Out (FEFO) untuk menekan tingkat kedaluwarsa produk medis. Mengintegrasikan gerbang pembayaran digital (QRIS) guna mempercepat dan mengamankan alur transaksi pelanggan.",
      tags: ["Node.js", "MySQL", "Sequelize", "QRIS", "FEFO Algorithm"],
      image: "https://images.unsplash.com/photo-1774901128302-e2bbd154da44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGNvZGUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzcwNDMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      links: [
        { label: "GitHub", url: "#", type: "github" },
        { label: "Live Demo", url: "#", type: "live" },
      ],
      featured: true,
      color: "#1E3A8A",
    },
    {
      id: "se2",
      title: "Web Portofolio Profesional",
      subtitle: "Front-End Development",
      desc: "Membangun platform antarmuka web responsif menggunakan Next.js, TypeScript, dan utility-first CSS (Tailwind CSS). Merancang komponen UI interaktif dengan mengimplementasikan pustaka Shadcn/UI dan Recharts untuk visualisasi data keahlian teknis.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Recharts"],
      image: "https://images.unsplash.com/photo-1760507363325-b1633ed2cdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwdGVjaCUyMHdvcmtzcGFjZSUyMGRhcmt8ZW58MXx8fHwxNzc3MDQzMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      links: [{ label: "GitHub", url: "#", type: "github" }],
      color: "#F97316",
    },
  ],
  data: [
    {
      id: "da1",
      title: "Automasi Inventaris Retail & API",
      subtitle: "System Integration",
      desc: "Merancang arsitektur integrasi antara basis data inventaris lokal dengan API Shopee untuk sinkronisasi ketersediaan produk. Mengotomatisasi pembaruan stok secara real-time untuk mencegah ketidaksesuaian data antara gudang fisik dan platform e-commerce.",
      tags: ["API Integration", "Shopee API", "Real-time Sync", "Automation"],
      image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzcwNDMwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      links: [{ label: "Live Demo", url: "#", type: "live" }],
      featured: true,
      color: "#8B5CF6",
    },
    {
      id: "da2",
      title: "Perancangan Arsitektur Enterprise",
      subtitle: "Data & Business Process Analysis",
      desc: "Memetakan alur kerja operasional dan merancang Business Process Model and Notation (BPMN) untuk optimalisasi proses bisnis UMKM dan instansi kesehatan (RSUP Sanglah). Menyusun Conceptual Data Model (CDM) sebagai fondasi arsitektur basis data sistem terintegrasi. Membangun dasbor analitik bisnis interaktif menggunakan Google Looker Studio dan Power BI guna mendukung pengambilan keputusan berbasis data.",
      tags: ["BPMN", "CDM", "Google Looker Studio", "Power BI", "Business Analysis"],
      image: "https://images.unsplash.com/photo-1760507363325-b1633ed2cdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwdGVjaCUyMHdvcmtzcGFjZSUyMGRhcmt8ZW58MXx8fHwxNzc3MDQzMDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      links: [{ label: "GitHub", url: "#", type: "github" }],
      color: "#10B981",
    },
  ],
  branding: [
    {
      id: "br1",
      title: "Digitalisasi Operasional Bisnis",
      subtitle: "Digital Transformation Lead",
      desc: "Memelopori peralihan bisnis konvensional ke ekosistem digital melalui strategi rebranding visual perusahaan. Mengelola ekspansi penjualan B2C (Business-to-Consumer) dengan membuka saluran distribusi baru melalui marketplace digital. Mendigitalisasi sistem transaksi fisik dengan mengadopsi infrastruktur pembayaran nontunai.",
      tags: ["Digital Transformation", "Rebranding", "B2C Expansion", "Digital Payment"],
      image: "https://images.unsplash.com/photo-1760386129108-d17b9cdfc4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbG9nbyUyMGNyZWF0aXZlfGVufDF8fHx8MTc3NzA0MzAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      links: [{ label: "View Case Study", url: "#", type: "live" }],
      featured: true,
      color: "#F59E0B",
    },
  ],
  docs: [],
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group relative rounded-2xl border border-white/8 bg-[#0D1124] overflow-hidden hover:border-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ boxShadow: "0 0 0 0 transparent" }}
    >
      {/* Image */}
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1124] via-[#0D1124]/40 to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs text-white"
            style={{
              background: project.color,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <p
          className="text-white/30 text-xs mb-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {project.subtitle}
        </p>
        <h3
          className="text-white mb-2 text-sm sm:text-base"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          {project.title}
        </h3>
        <p
          className="text-white/45 text-xs sm:text-sm mb-4 line-clamp-2"
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}
        >
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-white/40 text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  ...(link.type === "github"
                    ? {
                        borderColor: "rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.5)",
                      }
                    : {
                        borderColor: `${project.color}40`,
                        background: `${project.color}15`,
                        color: project.color,
                      }),
                }}
              >
                {link.type === "github" ? (
                  <Github size={12} />
                ) : (
                  <ExternalLink size={12} />
                )}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${project.color}30`,
        }}
      />
    </div>
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("software");

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#F97316]/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#F97316]" />
            <span
              className="text-[#F97316] text-xs sm:text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Projects
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-end gap-2 sm:gap-4">
            <h2
              className="text-white"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Project{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B7FE8] to-[#F97316]">
                Showcase
              </span>
            </h2>
            <p
              className="text-white/40 text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {projects[activeTab].length} projects
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1 rounded-xl bg-white/3 border border-white/5 w-fit overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[#1E3A8A] text-white shadow-lg shadow-[#1E3A8A]/30"
                  : "text-white/40 hover:text-white/60 hover:bg-white/5"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: activeTab === tab.id ? 500 : 400 }}
            >
              <span>{tab.emoji}</span>
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden text-xs">{tab.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects[activeTab].map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all text-sm cursor-pointer group"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Lihat Semua Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
