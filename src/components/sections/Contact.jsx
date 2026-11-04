import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { profile } from "../../data/profile";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const { email, socials } = profile;

  const contactLinks = [
    {
      url: email,
      icon: Mail,
      label: "Email Langsung",
      display: email,
      isMail: true,
    },
    {
      url: socials?.github,
      icon: Github,
      label: "Profil GitHub",
      display: socials?.github?.replace(/^https?:\/\//, ""),
    },
    {
      url: socials?.linkedin,
      icon: Linkedin,
      label: "Profil LinkedIn",
      display: socials?.linkedin?.replace(/^https?:\/\//, ""),
    },
    {
      url: socials?.instagram,
      icon: Instagram,
      label: "Instagram",
      display: socials?.instagram?.replace(/^https?:\/\//, ""),
    },
  ].filter((link) => link.url && link.url.trim());

  return (
    <section id="kontak" className="section-bg py-[100px]">
      <Container>
        <SectionHeading
          tag="KONTAK"
          subtitle="Buka diskusi untuk peluang kerja sama, freelance, konsultasi, atau sekadar bertukar ide."
        >
          Mari Terhubung
        </SectionHeading>

        <div
          ref={ref}
          className={`max-w-2xl text-left transition-all duration-400 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Kartu kontak: di section --bg kartu memakai --bg-alt, tanpa border */}
          {contactLinks.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.isMail ? `mailto:${link.url}` : link.url}
                  target={link.isMail ? undefined : "_blank"}
                  rel={link.isMail ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3.5 rounded-xl bg-[var(--bg-alt)] p-4 sm:p-5 shadow-xs transition-all duration-150 hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--bg)] text-[var(--muted)] shadow-2xs transition-colors duration-150 group-hover:text-[var(--foreground)]">
                    <link.icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-[var(--foreground)] truncate">
                      {link.display}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--muted)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--foreground)]"
                  />
                </a>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-[var(--bg-alt)] p-8 text-left">
              <p className="text-sm text-[var(--muted)]">
                Informasi kontak belum ditambahkan.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
