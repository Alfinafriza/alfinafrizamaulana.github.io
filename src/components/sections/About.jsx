import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { about } from "../../data/about";
import { profile } from "../../data/profile";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function AnimatedBlock({ children, delay = 0, className = "" }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-400 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function About() {
  if (!about) return null;

  const { headline, bio, contributions, specializations, connect } = about;
  const { email, socials } = profile;

  const socialLinks = [
    { url: socials?.github, icon: Github, label: "GitHub" },
    { url: socials?.linkedin, icon: Linkedin, label: "LinkedIn" },
    { url: socials?.instagram, icon: Instagram, label: "Instagram" },
    { url: email, icon: Mail, label: "Email", isMail: true },
  ].filter((link) => link.url);

  return (
    <section id="tentang" className="section-bg-alt py-[100px]">
      <Container>
        <SectionHeading tag="TENTANG SAYA">
          Profil & Latar Belakang
        </SectionHeading>

        {/* Two-column editorial grid */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 text-left">
          {/* ===== LEFT COLUMN ===== */}
          <div className="space-y-8">
            {/* Headline Profesional */}
            {headline && (
              <AnimatedBlock delay={50}>
                <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-bold leading-snug text-[var(--foreground)]">
                  {headline}
                </h3>
              </AnimatedBlock>
            )}

            {/* Paragraf Bio */}
            {bio && bio.length > 0 && (
              <AnimatedBlock delay={100}>
                <div className="space-y-5">
                  {bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm sm:text-base leading-[1.75] text-[var(--muted)] max-w-[65ch]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AnimatedBlock>
            )}

            {/* Kontribusi & Pengalaman (tanpa border pemisah) */}
            {contributions && (
              <AnimatedBlock delay={150}>
                <div className="pt-2">
                  <h4 className="text-base sm:text-lg font-semibold text-[var(--foreground)] mb-3">
                    {contributions.title}
                  </h4>
                  {contributions.description && (
                    <p className="text-sm sm:text-base leading-[1.75] text-[var(--muted)] max-w-[65ch]">
                      {contributions.description}
                    </p>
                  )}
                </div>
              </AnimatedBlock>
            )}
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="space-y-8">
            {/* Spesialisasi & Tech Stack */}
            {specializations && (
              <AnimatedBlock delay={100}>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[var(--foreground)] mb-3">
                    {specializations.title}
                  </h4>
                  {specializations.description && (
                    <p className="text-sm leading-[1.75] text-[var(--muted)] mb-5 max-w-[65ch]">
                      {specializations.description}
                    </p>
                  )}

                  {/* Kategori Keahlian: di section --bg-alt kartu memakai --bg, tanpa border */}
                  {specializations.categories &&
                    specializations.categories.length > 0 && (
                      <div className="space-y-4">
                        {specializations.categories.map((cat, index) => (
                          <div
                            key={index}
                            className="rounded-xl bg-[var(--bg)] p-6 flex flex-col gap-3 shadow-xs transition-colors duration-300"
                          >
                            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                              {cat.label}
                            </p>
                            <p className="text-sm font-medium text-[var(--foreground)] leading-[1.7]">
                              {cat.items}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </AnimatedBlock>
            )}

            {/* Mari Terhubung */}
            {connect && (
              <AnimatedBlock delay={200}>
                <div className="pt-2">
                  <h4 className="text-base sm:text-lg font-semibold text-[var(--foreground)] mb-3">
                    {connect.title}
                  </h4>
                  {connect.description && (
                    <p className="text-sm leading-[1.75] text-[var(--muted)] mb-5 max-w-[65ch]">
                      {connect.description}
                    </p>
                  )}

                  {/* Social links: tombol memakai --bg, tanpa border */}
                  {socialLinks.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-3">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.isMail ? `mailto:${link.url}` : link.url}
                          target={link.isMail ? undefined : "_blank"}
                          rel={link.isMail ? undefined : "noopener noreferrer"}
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--bg)] text-[var(--muted)] shadow-xs transition-all duration-150 hover:text-[var(--foreground)] hover:scale-105"
                          aria-label={link.label}
                        >
                          <link.icon size={18} />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-[var(--muted)] italic">
                      Informasi kontak belum ditambahkan.
                    </p>
                  )}
                </div>
              </AnimatedBlock>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
