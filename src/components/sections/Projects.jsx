import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { projects } from "../../data/projects";

function ProjectCard({ project }) {
  const { t } = useTranslation();
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-hairline bg-surface-1 transition-colors hover:border-hairline-strong">
      <div className="aspect-[16/10] overflow-hidden bg-surface-2">
        <img
          src={project.imgPath}
          alt={t(project.titleKey)}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-[22px] font-medium leading-[1.25] tracking-[-0.4px] text-ink">
          {t(project.titleKey)}
        </h3>
        <p className="flex-1 text-sm leading-[1.5] text-ink-subtle">{t(project.descriptionKey)}</p>

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-2 flex gap-3">
          <Button href={project.link} target="_blank" rel="noreferrer" variant="secondary" className="flex-1">
            <AiFillGithub /> {t("projects.view_project")}
          </Button>
          {project.demoLink && (
            <Button href={project.demoLink} target="_blank" rel="noreferrer" variant="tertiary">
              <HiOutlineExternalLink /> {t("projects.view_demo")}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow={t("nav.projects")}
        title={
          <>
            {t("projects.title")} <span className="text-primary">{t("projects.title_highlight")}</span>
          </>
        }
        subtitle={t("projects.subtitle")}
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.titleKey} project={project} />
        ))}
      </div>
    </section>
  );
}
