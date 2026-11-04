import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  const validProjects = projects.filter((p) => p.title && p.title.trim());

  return (
    <section id="proyek" className="section-bg py-[100px]">
      <Container>
        <SectionHeading
          tag="PORTOFOLIO"
          subtitle="Koleksi proyek pilihan yang menunjukkan kemampuan pemecahan masalah dan rekayasa perangkat lunak."
        >
          Proyek Unggulan
        </SectionHeading>

        {validProjects.length > 0 ? (
          /* Gap antar kartu 24-32px (gap-6 md:gap-8) */
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {validProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-[var(--bg-alt)] p-12 text-left">
            <p className="text-sm text-[var(--muted)]">
              Proyek akan segera ditambahkan.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
