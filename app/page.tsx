
"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Cpu,
  Menu,
  X,
  Orbit,
  Bot,
  Code2,
  Music2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/useLanguage";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, locale } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  const projects = [
    {
      id: "01",
      type: t.capabilities.aiType,
      title: t.capabilities.aiTitle,
      text: t.capabilities.aiDescription,
      icon: Cpu,
    },
    {
      id: "02",
      type: t.capabilities.roboticsType,
      title: t.capabilities.roboticsTitle,
      text: t.capabilities.roboticsDescription,
      icon: Bot,
    },
    {
      id: "03",
      type: t.capabilities.softwareType,
      title: t.capabilities.softwareTitle,
      text: t.capabilities.softwareDescription,
      icon: Code2,
    },
    {
      id: "04",
      type: t.capabilities.milifyType,
      title: t.capabilities.milifyTitle,
      text: t.capabilities.milifyDescription,
      icon: Music2,
      href: "https://milify.ir",
    },
  ];
  return (
<main
  lang={locale === "fa" ? "fa" : "en"}
  dir={locale === "fa" ? "rtl" : "ltr"}
  className={locale === "fa" ? "font-vazir persian-page" : "english-page"}
>      <div className="topline">
        <span>{t.top.studio}</span>
        <span className="topline-right">
          <i />
          {t.top.available}
          <span className="topline-year">
            {t.top.established}
          </span>
        </span>
      </div>

      <header className="nav shell">
        <a href="#home" className="brand" aria-label={t.nav.home}>
          <span className="brand-mark">
            <svg viewBox="0 0 54 48" aria-hidden="true">
              <path d="M4 42V5L27 25 50 5V42H39V27L27 38 15 27V42Z" />
              <path d="M15 5L27 16 39 5" />
            </svg>
          </span>
          <span className="brand-word">
            MILITECH<span className="brand-dot">.</span>
            <small>AI · ROBOTICS · FUTURE</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <LanguageSwitcher />
          <a href="#capabilities" onClick={closeMenu}>
            {t.nav.capabilities}
          </a>
          <a href="#approach" onClick={closeMenu}>
            {t.nav.approach}
          </a>
          <a href="#projects" onClick={closeMenu}>
            {t.nav.focus}
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="mobile-contact"
          >
            {t.nav.startProject} <ArrowUpRight size={15} />
          </a>
        </nav>

        <a href="#contact" className="nav-cta">
          {t.nav.talk} <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero shell" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              {t.hero.eyebrow}
            </div>

            <h1 >
              {t.hero.line1}
              <br />
              {t.hero.line2}{" "}
              <span className="outline-word">
                {t.hero.line3}
              </span>
              <br />
              {t.hero.line4}{" "}
              <span className="yellow">
                {t.hero.line5}
                <span className="period">.</span>
              </span>
            </h1>

            <p className="hero-description font-vazir">
              {t.hero.description}
            </p>

            <div className="hero-actions">
              <a className="button button-yellow" href="#capabilities">
                {t.hero.explore} <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#approach">
                {t.hero.approach} <ArrowDownRight size={17} />
              </a>
            </div>

            <div className="hero-footnote">
              <span className="crosshair">✳</span>
              {t.hero.footnote}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-frame">
              <div className="visual-top">
                <span>{t.hero.figure}</span>
                <span>40° 42&apos; 46.8&quot; N</span>
              </div>

              <div className="visual-art">
                <div className="sun-halo" />
                <div className="grid-floor" />
                <div className="orbital orbital-one" />
                <div className="orbital orbital-two" />

                <div className="core">
                  <div className="core-ring ring-a" />
                  <div className="core-ring ring-b" />
                  <div className="core-ring ring-c" />

                  <div className="core-center">
                    <svg viewBox="0 0 100 88" aria-hidden="true">
                      <path d="M7 81V7L50 45 93 7V81H72V49L50 68 28 49V81Z" />
                      <path d="M28 7L50 26 72 7" />
                    </svg>
                  </div>

                  <span className="core-label">
                    {t.hero.core}
                  </span>
                </div>

                <div className="visual-side-label">
                  {t.hero.intelligence}
                </div>

                <div className="visual-coordinate">
                  M—01
                  <br />
                  <span>{t.hero.active}</span>
                </div>
              </div>

              <div className="visual-bottom">
                <span>AI / ROBOTICS / SYSTEMS</span>
                <span className="status">
                  <i /> {t.hero.online}
                </span>
              </div>
            </div>

            <div className="hero-stamp">
              <Orbit size={19} />
              <span>
                {t.hero.engineering}
                <br />
                {t.hero.next}
              </span>
            </div>

            <div className="hero-index">
              01 <span>/</span> 04
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>{t.hero.scroll}</span>
          <span className="scroll-line" />
        </div>
      </section>

      <section className="ticker" aria-label="MILITECH disciplines">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <span className="ticker-group" key={index}>
              <span>{t.ticker.ai}</span>
              <b>✳</b>
              <span>{t.ticker.robotics}</span>
              <b>✳</b>
              <span>{t.ticker.software}</span>
              <b>✳</b>
              <span>{t.ticker.systems}</span>
              <b>✳</b>
            </span>
          ))}
        </div>
      </section>

      <section className="intro shell" id="approach">
        <div className="section-tag">
          <span>01</span> / {t.mission.tag}
        </div>

        <div className="intro-content">
          <p className="big-statement">
            {t.mission.first}{" "}
            <span>{t.mission.second}</span>
          </p>

          <div className="intro-bottom">
            <p>{t.mission.description}</p>
            <a
              className="round-link"
              href="#contact"
              aria-label={t.mission.contact}
            >
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <section className="capabilities shell" id="capabilities">
        <div className="section-heading">
          <div>
            <div className="section-tag">
              <span>02</span> / {t.capabilities.tag}
            </div>
            <h2>
              {t.capabilities.titleFirst}
              <br />
              <span>{t.capabilities.titleSecond}</span>{" "}
              {t.capabilities.titleThird}
            </h2>
          </div>

          <p>{t.capabilities.description}</p>
        </div>

       
        <div className="capability-grid">
  {projects.map((project) => {
    const Icon = project.icon;

    return (
      <article
        className="capability-card"
        key={project.id}
      >
        <div className="card-top">
          <span>{project.id} / 04</span>
          <Icon size={23} strokeWidth={1.4} />
        </div>

        <div className="card-icon">
          <Icon size={31} strokeWidth={1.25} />
          <span className="icon-orbit" />
        </div>

        <div className="card-type">
          {project.type}
        </div>

        <h3>
          {project.title.split("\n").map((line, index) => (
            <span key={`${project.id}-${index}`}>
              {line}
              <br />
            </span>
          ))}
        </h3>

        <p>{project.text}</p>

        <a
          href={project.href ?? "#contact"}
          className="card-link"
          target={project.href ? "_blank" : undefined}
          rel={
            project.href
              ? "noopener noreferrer"
              : undefined
          }
        >
          {project.href ? "Explore MILIFY" : t.capabilities.discuss}
          <ArrowUpRight size={16} />
        </a>
      </article>
    );
  })}
</div>
      </section>

      <section className="manifesto">
        <div className="manifesto-grid">
          <div className="manifesto-left">
            <div className="section-tag">
              <span>03</span> / {t.manifesto.tag}
            </div>
            <div className="manifesto-symbol">
              M<span>.</span>
            </div>
          </div>

          <div className="manifesto-right">
            <p className="manifesto-quote">
              {t.manifesto.first}
              <br />
              <span>{t.manifesto.second}</span>
            </p>

            <div className="manifesto-bottom">
              <span>{t.manifesto.footer}</span>
              <Sparkles size={19} />
            </div>
          </div>
        </div>
      </section>

      <section className="focus shell" id="projects">
        <div className="section-tag">
          <span>04</span> / {t.focus.tag}
        </div>

        <div className="focus-row">
          <h2>
            {t.focus.titleFirst}
            <br />
            <span>{t.focus.titleSecond}</span>
          </h2>

          <div className="focus-list">
            {[
              t.focus.ai,
              t.focus.robotics,
              t.focus.software,
              t.focus.research,
            ].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-panel">
          <div className="contact-grid-art">
            <span>M</span>
            <div className="contact-circle c1" />
            <div className="contact-circle c2" />
            <div className="contact-circle c3" />
          </div>

          <div className="contact-content">
            <div className="section-tag">
              <span>05</span> / {t.contact.tag}
            </div>

            <h2>
              {t.contact.titleFirst}
              <br />
              {t.contact.titleSecond}{" "}
              <span>{t.contact.titleThird}</span>
            </h2>

            <p>{t.contact.description}</p>

            <a
              href="mailto:hello@militech.co"
              className="button button-yellow"
            >
              {t.contact.button} <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-number">MILITECH / 2026</div>
        </div>
      </section>

      <footer className="footer shell">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">
            <svg viewBox="0 0 54 48" aria-hidden="true">
              <path d="M4 42V5L27 25 50 5V42H39V27L27 38 15 27V42Z" />
              <path d="M15 5L27 16 39 5" />
            </svg>
          </span>

          <span className="brand-word">
            MILITECH<span className="brand-dot">.</span>
            <small>AI · ROBOTICS · FUTURE</small>
          </span>
        </a>

        <span className="footer-copy">
          {t.footer.description}
        </span>

        <a href="#home" className="back-top">
          {t.footer.back} <ChevronRight size={15} />
        </a>

        <div className="footer-bottom">
          <span>{t.footer.copyright}</span>
          <span>
            {t.footer.tagline}{" "}
            <span className="yellow">✳</span>
          </span>
        </div>
      </footer>
    </main>
  );
}
