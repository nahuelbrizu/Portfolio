import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import RoleRotator from "../ui/RoleRotator";
import pdfES from "../../Assets/CV_Nahuel_Brizuela_Soporte_IT.pdf";
import pdfEN from "../../Assets/CV_Nahuel_Brizuela_IT_English.pdf";

export default function Home() {
  const { t, i18n } = useTranslation();
  const cvHref = i18n.language.startsWith("es") ? pdfES : pdfEN;

  const roles = [
    t("type.software_eng"),
    t("type.problem_solver"),
    t("type.passionate"),
    t("type.testing"),
    t("type.automation"),
    t("type.work_ethic"),
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="grid-texture pointer-events-none absolute inset-0 h-[560px]" />

      <div className="relative mx-auto flex max-w-content flex-col items-start gap-6 px-4 pb-24 pt-20 sm:px-6 sm:pt-28">
        <Badge dot>{t("hero.status")}</Badge>

        <span className="text-[13px] font-medium uppercase tracking-[0.4px] text-primary">
          {t("hero.eyebrow")}
        </span>

        <h1 className="animate-fadeUp text-[40px] font-semibold leading-[1.1] tracking-[-1.2px] text-ink sm:text-[56px] sm:tracking-[-1.8px] md:text-[72px] md:tracking-[-2.4px]">
          {t("hero.hi")}
          <br />
          <span className="text-primary">{t("hero.name")}</span>
        </h1>

        <div className="h-6">
          <RoleRotator words={roles} />
        </div>

        <p className="max-w-xl text-lg leading-[1.5] text-ink-subtle">{t("hero.tagline")}</p>

        <p className="text-sm text-ink-tertiary">{t("hero.location")}</p>

        <div className="mt-2 flex flex-wrap gap-3">
          <Button as={Link} to="/project" variant="primary">
            {t("hero.cta_projects")}
          </Button>
          <Button href={cvHref} target="_blank" rel="noreferrer" variant="secondary">
            {t("hero.cta_resume")}
          </Button>
        </div>
      </div>
    </section>
  );
}
