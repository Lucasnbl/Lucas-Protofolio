import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "projects", "experience", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrolled
    ? "py-3 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
    : "py-3 sm:py-5 bg-transparent"
}`}
    >
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#F97316] flex items-center justify-center">
            <span className="text-white text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>
              SI
            </span>
          </div>
          <span
            className="text-white/90 group-hover:text-white transition-colors hidden sm:inline"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
          >
            Portfolio<span className="text-[#F97316]">.</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 lg:px-4 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-white/50 hover:text-white/80"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: isActive ? 500 : 400 }}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-white/8 border border-white/10" />
                  )}
                  <span className="relative">{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F97316]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => handleNav("#contact")}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg bg-[#F97316] text-white text-sm hover:bg-[#ea6c0a] transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
        >
          Hire Me
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0F1E]/95 backdrop-blur-xl border-t border-white/5 px-4 sm:px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mt-3 pt-3 border-t border-white/5">
              <button
                onClick={() => handleNav("#contact")}
                className="w-full px-4 py-3 rounded-lg bg-[#F97316] text-white text-sm cursor-pointer hover:bg-[#ea6c0a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
