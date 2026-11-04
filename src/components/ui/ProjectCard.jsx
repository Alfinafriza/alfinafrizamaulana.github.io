import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function ProjectCard({ project }) {
  const { ref, isVisible } = useScrollReveal();
  const {
    title,
    description,
    image,
    imageAlt,
    technologies,
    repositoryUrl,
    liveUrl,
  } = project;

  const hasLinks = repositoryUrl || liveUrl;

  return (
    <article
      ref={ref}
      /* Di section --bg, kartu memakai --bg-alt, tanpa border */
      className={`group flex flex-col overflow-hidden rounded-2xl bg-[var(--bg-alt)] transition-all duration-300 ease-out hover:-translate-y-1 shadow-xs text-left ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Thumbnail: Aspect ratio 16:9 */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/40 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-[var(--muted)]">
            <FolderGit2 size={28} strokeWidth={1.5} />
            <span className="text-xs">Preview Proyek Belum Tersedia</span>
          </div>
        )}
      </div>

      {/* Content: padding 24px (p-6), isi kartu gap 12px (flex flex-col gap-3) */}
      <div className="flex flex-1 flex-col p-6 gap-3">
        <h3 className="text-lg md:text-[20px] font-bold tracking-tight text-[var(--foreground)]">
          {title}
        </h3>

        {description && (
          <p className="text-sm leading-[1.75] text-[var(--muted)] flex-1">
            {description}
          </p>
        )}

        {/* Tag teknologi: memakai bg-[var(--bg)], tanpa border */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[var(--bg)] px-3 py-1 text-xs font-medium text-[var(--muted)] shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {hasLinks && (
          <div className="flex items-center gap-5 pt-4 mt-auto">
            {repositoryUrl && (
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-1 text-sm font-medium text-[var(--muted)] transition-colors duration-150 hover:text-[var(--foreground)]"
                aria-label={`Repository source code ${title}`}
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-1 text-sm font-medium text-[var(--muted)] transition-colors duration-150 hover:text-[var(--foreground)]"
                aria-label={`Live demo ${title}`}
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
