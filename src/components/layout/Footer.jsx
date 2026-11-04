import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Container from "./Container";
import { profile } from "../../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { socials, email, name } = profile;

  const brandName = name && name.trim() !== "[NAMA LENGKAP]"
    ? name
    : "[NAMA / BRAND]";

  const socialLinks = [
    { url: socials?.github, icon: Github, label: "GitHub" },
    { url: socials?.linkedin, icon: Linkedin, label: "LinkedIn" },
    { url: socials?.instagram, icon: Instagram, label: "Instagram" },
    { url: email, icon: Mail, label: "Email", isMail: true },
  ].filter((link) => link.url && link.url.trim());

  return (
    /* Footer section-bg-alt, tanpa border */
    <footer className="section-bg-alt py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 text-left sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              {brandName}
            </p>
            <p className="text-xs text-[var(--muted)] mt-1">
              © {currentYear} Seluruh hak cipta dilindungi.
            </p>
          </div>

          {socialLinks.length > 0 && (
            <div className="flex items-center gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.isMail ? `mailto:${link.url}` : link.url}
                  target={link.isMail ? undefined : "_blank"}
                  rel={link.isMail ? undefined : "noopener noreferrer"}
                  className="rounded-lg p-2 text-[var(--muted)] transition-colors duration-150 hover:bg-[var(--bg)] hover:text-[var(--foreground)]"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
