import "../styles/fonts.css";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export type ThemeMode = "dark" | "light";

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={theme === "dark" ? "dark" : "light"}
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: theme === "dark" ? "#0A0F1E" : "#f5f7ff",
        color: theme === "dark" ? "#ffffff" : "#0f172a",
        minHeight: "100vh",
        transition: "all 0.25s ease",
      }}
    >
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection theme={theme} />
        <AboutSection theme={theme} />
        <ProjectsSection theme={theme} />
        <ExperienceSection theme={theme} />
        <ContactSection theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}
