import Container from "../layout/Container";
import Button from "../ui/Button";
import { profile } from "../../data/profile";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const {
    name,
    greeting,
    role,
    company,
    companyUrl,
    summary,
    availability,
    heroImage,
  } = profile;

  return (
    <section
      id="beranda"
      className="section-bg flex min-h-[calc(100vh-72px)] items-center py-[100px]"
    >
      <Container>
        <div
          ref={ref}
          className={`grid items-center gap-12 md:grid-cols-12 lg:gap-16 transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Text Content */}
          <div className="order-2 md:order-1 md:col-span-7 lg:col-span-8 flex flex-col items-start text-left">
            {/* Availability Badge */}
            {availability && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--bg-alt)] px-4 py-1.5 text-xs font-medium text-[var(--muted)]">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{availability}</span>
              </div>
            )}

            {/* Greeting */}
            {greeting && (
              <p className="mb-3 text-sm sm:text-base font-medium text-[var(--muted)]">
                {greeting}
              </p>
            )}

            {/* Hero Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[54px] font-bold tracking-tight text-[var(--foreground)] leading-[1.15] mb-4">
              {name}
            </h1>

            {/* Role / Subtitle */}
            <p className="text-lg sm:text-xl md:text-[22px] lg:text-[26px] font-medium text-[var(--muted)] mb-6 leading-snug">
              {role}
              {company && (
                <>
                  <span className="text-[var(--muted)] font-normal"> di </span>
                  {companyUrl ? (
                    <a
                      href={companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--foreground)] underline underline-offset-4 hover:opacity-80 transition-opacity duration-150"
                    >
                      {company}
                    </a>
                  ) : (
                    <span className="text-[var(--foreground)]">{company}</span>
                  )}
                </>
              )}
            </p>

            {/* Summary Paragraph */}
            {summary && (
              <p className="text-sm sm:text-base text-[var(--muted)] max-w-[560px] leading-[1.75]">
                {summary}
              </p>
            )}

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#kontak" variant="primary">
                Hubungi Saya
              </Button>
              <Button href="#proyek" variant="secondary">
                Lihat Proyek
              </Button>
            </div>
          </div>

          {/* Right Area: Profile image dengan background bulat/oval elegan */}
          <div className="order-1 md:order-2 md:col-span-5 lg:col-span-4 flex justify-start md:justify-end">
            {heroImage ? (
              <div className="relative flex items-center justify-center">
                {/* Backdrop shape di belakang foto */}
                <div className="absolute h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full bg-[var(--bg-alt)] opacity-90 blur-xs" />
                <img
                  src={heroImage}
                  alt={name}
                  className="relative z-10 h-72 sm:h-80 md:h-96 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            ) : (
              /* Minimalist Neutral Placeholder */
              <div className="flex h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 items-center justify-center rounded-2xl bg-[var(--bg-alt)] text-[var(--muted)] transition-colors duration-300">
                <div className="text-center p-4">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg)] text-xs font-semibold text-[var(--muted)]">
                    Foto
                  </div>
                  <p className="text-xs text-[var(--muted)]">Placeholder Foto Profil</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
