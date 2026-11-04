import { GraduationCap, BookOpen } from "lucide-react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import { educationData } from "../../data/experience";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { getAssetPath } from "../../utils/assets";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { tag, title, subtitle, items } = educationData;

  const validItems = (items || []).filter(
    (item) => item.name && item.name.trim()
  );

  return (
    <section
      id="pendidikan"
      className="section-bg-alt py-[100px]"
    >
      <Container>
        <div
          ref={ref}
          className={`transition-all duration-500 ease-out text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Header Rata Kiri */}
          <SectionHeading tag={tag} subtitle={subtitle}>
            {title}
          </SectionHeading>

          {/* Logo Showcase Row: Rata Kiri (justify-start), gap 32-48px */}
          {validItems.length > 0 ? (
            <div className="flex flex-wrap items-start justify-start gap-8 sm:gap-12 md:gap-16">
              {validItems.map((item, index) => (
                <div
                  key={item.id || index}
                  className="flex flex-col items-start text-left max-w-[160px]"
                >
                  {/* Logo Container: tanpa border, di section --bg-alt bisa diberi bg transparan/bersih */}
                  <div className="flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-start p-1 mb-2">
                    {item.logo ? (
                      <img
                        src={getAssetPath(item.logo)}
                        alt={`Logo ${item.name}`}
                        className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-[var(--muted)] opacity-60 transition-all duration-300 hover:opacity-100 hover:text-[var(--foreground)] cursor-pointer">
                        {index % 2 === 0 ? (
                          <GraduationCap size={36} strokeWidth={1.5} />
                        ) : (
                          <BookOpen size={36} strokeWidth={1.5} />
                        )}
                        <span className="text-[10px] mt-1 font-semibold uppercase tracking-wider">
                          Logo
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Institution Name */}
                  <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Program & Period */}
                  {item.program && (
                    <p className="mt-1 text-xs text-[var(--muted)] line-clamp-1">
                      {item.program}
                    </p>
                  )}
                  {item.period && (
                    <span className="text-[11px] text-[var(--muted)] font-medium">
                      {item.period}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-[var(--bg)] p-10 text-left">
              <p className="text-sm text-[var(--muted)]">
                Daftar institusi pendidikan dan program akan segera ditampilkan.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
