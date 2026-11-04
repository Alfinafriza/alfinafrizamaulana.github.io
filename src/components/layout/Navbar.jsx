import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import ThemeToggle from "../ui/ThemeToggle";
import { profile } from "../../data/profile";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Pendidikan", href: "#pendidikan" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const brandName = profile.name && profile.name.trim() !== "[NAMA LENGKAP]"
    ? profile.name
    : "[NAMA / BRAND]";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg)]/80 backdrop-blur-md shadow-sm"
          : "bg-[var(--bg)]/80 backdrop-blur-md"
      }`}
    >
      <Container>
        <nav
          className="flex h-[72px] items-center justify-between"
          aria-label="Navigasi utama"
        >
          {/* Logo Brand / Nama */}
          <a
            href="#beranda"
            className="text-base font-semibold tracking-tight text-[var(--foreground)] transition-colors duration-150 hover:text-[var(--muted)]"
          >
            {brandName}
          </a>

          {/* Desktop Links: Gap 32px (gap-8) */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] transition-colors duration-150 hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
            <div className="pl-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-[var(--muted)] transition-colors duration-150 hover:bg-[var(--bg-alt)] hover:text-[var(--foreground)]"
              aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-[var(--bg)] md:hidden">
          <Container>
            <nav className="flex flex-col gap-2 py-6" aria-label="Menu navigasi mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-[var(--muted)] transition-colors duration-150 hover:text-[var(--foreground)] hover:bg-[var(--bg-alt)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
