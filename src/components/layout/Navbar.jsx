import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../ui/Button";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/project", key: "nav.projects" },
  { to: "/resume", key: "nav.cv" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${isActive ? "text-ink" : "text-ink-subtle hover:text-ink"}`;

  return (
    <header
      className={`sticky top-0 z-50 h-14 border-b transition-colors ${
        scrolled ? "border-hairline bg-canvas/90 backdrop-blur" : "border-transparent bg-canvas"
      }`}
    >
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-mono text-sm font-medium text-ink" onClick={() => setOpen(false)}>
          nahuel<span className="text-primary">.</span>brizuela
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {t(l.key)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-1 rounded-full bg-surface-1 p-0.5 text-xs">
            <button
              onClick={() => changeLanguage("es")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                i18n.language.startsWith("es") ? "bg-surface-2 text-ink" : "text-ink-subtle"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                i18n.language.startsWith("en") ? "bg-surface-2 text-ink" : "text-ink-subtle"
              }`}
            >
              EN
            </button>
          </div>
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
          <Button as={Link} to="/resume" variant="secondary">
            {t("nav.cv")}
          </Button>
        </div>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-canvas px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {t(l.key)}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between border-t border-hairline pt-4">
            <div className="flex gap-3 text-ink-subtle">
              <a href="https://github.com/nahuelbrizu" target="_blank" rel="noreferrer">
                <AiFillGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nahuel-brizuela/" target="_blank" rel="noreferrer">
                <FaLinkedinIn size={16} />
              </a>
            </div>
            <div className="flex gap-1 text-xs">
              <button
                onClick={() => changeLanguage("es")}
                className={i18n.language.startsWith("es") ? "text-ink" : "text-ink-subtle"}
              >
                ES
              </button>
              <span className="text-ink-tertiary">/</span>
              <button
                onClick={() => changeLanguage("en")}
                className={i18n.language.startsWith("en") ? "text-ink" : "text-ink-subtle"}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
