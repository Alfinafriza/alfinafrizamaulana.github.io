import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg p-2 text-[var(--muted)] transition-colors duration-150 hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
      aria-label={
        theme === "dark" ? "Beralih ke mode terang" : "Beralih ke mode gelap"
      }
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

