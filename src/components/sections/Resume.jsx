import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineDownload } from "react-icons/ai";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import pdfES from "../../Assets/CV_Nahuel_Brizuela_Soporte_IT.pdf";
import pdfEN from "../../Assets/CV_Nahuel_Brizuela_IT_English.pdf";

export default function Resume() {
  const { t, i18n } = useTranslation();
  const currentPdf = i18n.language.startsWith("es") ? pdfES : pdfEN;

  return (
    <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
      <SectionHeading eyebrow={t("nav.cv")} title={t("resume.title")} subtitle={t("resume.subtitle")} />

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button href={currentPdf} download variant="primary">
          <AiOutlineDownload /> {t("resume.download")} —{" "}
          {i18n.language.startsWith("es") ? t("resume.view_es") : t("resume.view_en")}
        </Button>
        <Button href={pdfES} target="_blank" rel="noreferrer" variant="secondary">
          {t("resume.view_es")}
        </Button>
        <Button href={pdfEN} target="_blank" rel="noreferrer" variant="secondary">
          {t("resume.view_en")}
        </Button>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-hairline bg-surface-1 p-3 sm:p-4">
        <iframe
          key={currentPdf}
          src={currentPdf}
          title={t("resume.title")}
          className="h-[75vh] w-full rounded-lg bg-white"
        />
      </div>
      <p className="mt-3 text-xs text-ink-tertiary">{t("resume.preview_note")}</p>
    </section>
  );
}
