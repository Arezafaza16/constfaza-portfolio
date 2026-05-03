import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const navItems = [
    { label: "Tentang", id: "about" },
    { label: "Pengalaman", id: "experience" },
    { label: "Keahlian", id: "skills" },
    { label: "Proyek", id: "projects" },
    { label: "Kontak", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="bg-luxury-surface/80 backdrop-blur-xl border border-luxury-border px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl">
        <a href="#" className="font-serif italic font-bold text-xl tracking-tighter">
          AF.
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-luxury-accent after:transition-all ${
                activeSection === item.id 
                ? "text-white after:w-full" 
                : "text-luxury-muted hover:text-white after:w-0"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a 
          href="#contact" 
          className="bg-white text-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
        >
          Hubungi
        </a>
      </nav>
    </motion.header>
  );
}
