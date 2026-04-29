import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("about_card.greeting")} <span className="purple">Nahuel Brizuela</span> {t("about_card.from")} <span className="purple">Buenos Aires, Argentina.</span>
            <br />
            <br />
            {t("about_card.role_p1")} <span className="purple">{t("about_card.role_highlight1")}</span> {t("about_card.role_p2")} <span className="purple">{t("about_card.role_highlight2")}</span>.
            <br />
            <br />
            {t("about_card.desc_p1")} <span className="purple">{t("about_card.desc_highlight1")}</span>{t("about_card.desc_p2")} <span className="purple">{t("about_card.desc_highlight2")}</span> {t("about_card.desc_p3")} <span className="purple">{t("about_card.desc_highlight3")}</span> {t("about_card.desc_p4")} <span className="purple">{t("about_card.desc_highlight4")}</span> {t("about_card.desc_p5")} <span className="purple">{t("about_card.desc_highlight5")}</span> {t("about_card.desc_p6")}
            <br />
            <br />
            {t("about_card.activities_intro")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">{t("about_card.activity1")}</span> {t("about_card.activity1_desc")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about_card.activity2")} <span className="purple">{t("about_card.activity2_highlight")}</span> {t("about_card.activity2_desc")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about_card.activity3")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about_card.activity4")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {t("about_card.quote")}
          </p>
          <footer className="blockquote-footer">Nahuel Brizuela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
