import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function SectionHeading({
  children,
  subtitle,
  tag,
  className = "",
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`mb-10 md:mb-12 transition-all duration-400 ease-out text-left ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {tag && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-purple-600 dark:text-purple-400">
          {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold tracking-tight text-[var(--foreground)] leading-tight mb-3 md:mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-[var(--muted)] max-w-[65ch] leading-[1.75]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
