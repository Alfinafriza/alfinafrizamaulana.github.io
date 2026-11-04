export default function Button({
  children,
  href,
  variant = "primary",
  disabled = false,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-[999px] px-8 py-3.5 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

  const variants = {
    // Tombol utama: background gelap teks putih di light theme, sebaliknya di dark theme
    primary:
      "bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90 shadow-sm",
    // Tombol kedua: background abu muda (--bg-alt) tanpa border, ukuran & padding presisi sama
    secondary:
      "bg-[var(--bg-alt)] text-[var(--foreground)] hover:opacity-80 shadow-xs",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${
    disabled ? disabledStyles : ""
  } ${className}`;

  if (href && !disabled) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
