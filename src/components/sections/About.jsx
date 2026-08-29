import React from "react";
import { useTranslation } from "react-i18next";
import GitHubCalendar from "react-github-calendar";
import { ImPointRight } from "react-icons/im";
import SectionHeading from "../ui/SectionHeading";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiPython,
  DiJava,
  DiGithub,
} from "react-icons/di";
import {
  SiTypescript,
  SiPostgresql,
  SiLinux,
  SiUbuntu,
  SiVmware,
  SiJira,
  SiPostman,
  SiDocker,
  SiProxmox,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaMicrosoft, FaAws } from "react-icons/fa";
import { TbBrandWindows } from "react-icons/tb";

const techStack = [
  { icon: VscAzure, label: "Azure" },
  { icon: FaAws, label: "AWS" },
  { icon: DiPython, label: "Python" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: DiJavascript1, label: "JavaScript" },
  { icon: DiNodejs, label: "Node.js" },
  { icon: DiReact, label: "React" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: DiMysql, label: "MySQL" },
  { icon: DiJava, label: "Java" },
];

const toolStack = [
  { icon: SiUbuntu, label: "Ubuntu" },
  { icon: SiLinux, label: "Linux" },
  { icon: SiVmware, label: "VMware" },
  { icon: SiProxmox, label: "Proxmox" },
  { icon: FaMicrosoft, label: "Microsoft 365" },
  { icon: TbBrandWindows, label: "Windows" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiJira, label: "Jira" },
  { icon: DiGithub, label: "GitHub" },
  { icon: SiPostman, label: "Postman" },
];

function IconGrid({ items }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
      {items.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="group flex flex-col items-center gap-2 rounded-lg border border-hairline bg-surface-1 py-5 transition-colors hover:border-hairline-strong"
          title={label}
        >
          <Icon className="text-3xl text-ink-subtle transition-colors group-hover:text-primary" />
          <span className="text-[11px] text-ink-tertiary">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();

  const activities = [
    { text: t("about_card.activity1"), highlight: null, desc: t("about_card.activity1_desc") },
  ];

  return (
    <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow={t("about.title_im")}
        title={
          <>
            {t("about.title_know")} <span className="text-primary">{t("about.title_im")}</span>
          </>
        }
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 rounded-lg border border-hairline bg-surface-1 p-8 text-[15px] leading-[1.7] text-ink-muted">
          <p>
            {t("about_card.greeting")} <span className="text-ink">Nahuel Brizuela</span>{" "}
            {t("about_card.from")} <span className="text-ink">{t("hero.location")}</span>.
          </p>
          <p className="mt-4">
            {t("about_card.role_p1")}{" "}
            <span className="text-primary">{t("about_card.role_highlight1")}</span>{" "}
            {t("about_card.role_p2")}{" "}
            <span className="text-primary">{t("about_card.role_highlight2")}</span>.
          </p>
          <p className="mt-4">
            {t("about_card.desc_p1")}{" "}
            <span className="text-primary">{t("about_card.desc_highlight1")}</span>
            {t("about_card.desc_p2")}{" "}
            <span className="text-primary">{t("about_card.desc_highlight2")}</span>{" "}
            {t("about_card.desc_p3")}{" "}
            <span className="text-primary">{t("about_card.desc_highlight3")}</span>{" "}
            {t("about_card.desc_p4")}{" "}
            <span className="text-primary">{t("about_card.desc_highlight4")}</span>{" "}
            {t("about_card.desc_p5")}{" "}
            <span className="text-primary">{t("about_card.desc_highlight5")}</span>
            {t("about_card.desc_p6")}
          </p>

          <p className="mt-6 text-sm text-ink-subtle">{t("about_card.activities_intro")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <ImPointRight className="mt-1 shrink-0 text-primary" />
              <span>
                <span className="text-ink">{t("about_card.activity1")}</span>{" "}
                {t("about_card.activity1_desc")}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ImPointRight className="mt-1 shrink-0 text-primary" />
              <span>
                {t("about_card.activity2")}{" "}
                <span className="text-ink">{t("about_card.activity2_highlight")}</span>{" "}
                {t("about_card.activity2_desc")}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ImPointRight className="mt-1 shrink-0 text-primary" />
              <span>{t("about_card.activity3")}</span>
            </li>
            <li className="flex items-start gap-2">
              <ImPointRight className="mt-1 shrink-0 text-primary" />
              <span>{t("about_card.activity4")}</span>
            </li>
          </ul>
        </div>

        <blockquote className="lg:col-span-2 flex flex-col justify-center rounded-lg border border-hairline bg-surface-1 p-8">
          <p className="text-lg leading-[1.5] text-ink">“{t("about_card.quote")}”</p>
          <footer className="mt-4 text-sm text-ink-subtle">— Nahuel Brizuela</footer>
        </blockquote>
      </div>

      <div className="mt-16">
        <h3 className="text-[22px] font-medium tracking-[-0.4px] text-ink">
          {t("about.title_skillset")}{" "}
          <span className="text-primary">{t("about.title_skillset_highlight")}</span>
        </h3>
        <div className="mt-6">
          <IconGrid items={techStack} />
        </div>
      </div>

      <div className="mt-14">
        <h3 className="text-[22px] font-medium tracking-[-0.4px] text-ink">
          <span className="text-primary">{t("about.title_tools")}</span> {t("about.title_tools_highlight")}
        </h3>
        <div className="mt-6">
          <IconGrid items={toolStack} />
        </div>
      </div>

      <div className="mt-14 rounded-lg border border-hairline bg-surface-1 p-6 sm:p-8">
        <h3 className="text-[22px] font-medium tracking-[-0.4px] text-ink">
          {t("github.days_code")}{" "}
          <span className="text-primary">{t("github.days_code_highlight")}</span>
        </h3>
        <div className="mt-6 overflow-x-auto">
          <GitHubCalendar
            username="nahuelbrizu"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            colorScheme="dark"
            theme={{
              dark: ["#141516", "#2a2470", "#3d34a0", "#5e6ad2", "#828fff"],
            }}
          />
        </div>
      </div>
    </section>
  );
}
