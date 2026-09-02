import { Github, Linkedin, Mail, Instagram, Twitter, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: <Github size={18} />, href: "https://github.com/lucasnbll", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "mailto:lucasnbl111@gmail.com", label: "Email" },
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/lucasnbll?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: <Twitter size={18} />, href: "https://x.com", label: "Twitter/X" },
];

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const isDark = theme === "dark";
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t relative overflow-hidden"
      style={{ background: isDark ? "#060A14" : "#eef4ff", borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.08)" }}
    >
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#1E3A8A]/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#F97316] flex items-center justify-center flex-shrink-0">
                <span
                  className="text-white text-xs"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  SI
                </span>
              </div>
              <span
                className="text-white/80 text-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
              >
                Lucas Vincent<span className="hidden sm:inline"> Kurniawan</span><span className="text-[#F97316]">.</span>
              </span>
            </div>
            <p
              className="text-white/30 text-xs"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
            >
              Mahasiswa Sistem Informasi yang passionate membangun solusi digital inovatif dan berdampak.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-3 sm:gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-white/30 hover:text-white/60 transition-colors text-xs sm:text-sm cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/8 flex items-center justify-center text-white/30 hover:text-white hover:border-[#1E3A8A]/50 hover:bg-[#1E3A8A]/10 transition-all"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 Lucas Vincent Kurniawan Obedius Nobel. Built with React + Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <span
              className="text-white/20 text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Designed & Developed with ❤️
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
