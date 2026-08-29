import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm text-ink">
            nahuel<span className="text-primary">.</span>brizuela
          </p>
          <p className="mt-1 text-xs text-ink-subtle">{t("footer.tagline")}</p>
        </div>

        <a
          href="mailto:nahuelgbrizuela@gmail.com"
          className="flex items-center gap-2 text-sm text-ink-subtle hover:text-ink"
        >
          <HiOutlineMail size={16} />
          nahuelgbrizuela@gmail.com
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/nahuelbrizu"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-subtle hover:text-ink"
          >
            <AiFillGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nahuel-brizuela/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-subtle hover:text-ink"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
      <div className="border-t border-hairline py-4 text-center text-xs text-ink-tertiary">
        © {year} Nahuel Brizuela — {t("footer.rights")}
      </div>
    </footer>
  );
}
