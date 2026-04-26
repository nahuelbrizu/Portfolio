import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import raicesNetwork from "../../Assets/Projects/raices-network.png";
import raicesGestion from "../../Assets/Projects/raices-gestion.png";
import audioProject from "../../Assets/Projects/audioproject.png";
import glamMap from "../../Assets/Projects/glammap.png";
import turnosEstetica from "../../Assets/Projects/turnos-estetica.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('projects.title').replace(t('projects.title_highlight'), '')} <strong className="purple">{t('projects.title_highlight')} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t('projects.subtitle')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raicesNetwork}
              isBlog={false}
              title={t('projects.raices_network.title')}
              description={t('projects.raices_network.desc')}
              link="https://github.com/nahuelbrizu/raices-network"
              demoLink="https://raices-network.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raicesGestion}
              isBlog={false}
              title={t('projects.raices_gestion.title')}
              description={t('projects.raices_gestion.desc')}
              link="https://github.com/nahuelbrizu/raices"
              demoLink="https://raices-gestion.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audioProject}
              isBlog={false}
              title={t('projects.audioproject.title')}
              description={t('projects.audioproject.desc')}
              link="https://github.com/nahuelbrizu/audioProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glamMap}
              isBlog={false}
              title={t('projects.glammap.title')}
              description={t('projects.glammap.desc')}
              link="https://github.com/nahuelbrizu/glamMap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turnosEstetica}
              isBlog={false}
              title={t('projects.turnos_estetica.title')}
              description={t('projects.turnos_estetica.desc')}
              link="https://github.com/nahuelbrizu/services_calendar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title={t('projects.dashboard.title')}
              description={t('projects.dashboard.desc')}
              link="https://github.com/nahuelbrizu/dashboard_next"
              demoLink="https://dashboard-next.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title={t('projects.amplify.title')}
              description={t('projects.amplify.desc')}
              link="https://github.com/nahuelbrizu/Amplifyapp-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title={t('projects.crypto.title')}
              description={t('projects.crypto.desc')}
              link="https://github.com/nahuelbrizu/cryptoAnalyzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title={t('projects.giffy.title')}
              description={t('projects.giffy.desc')}
              link="https://github.com/nahuelbrizu/GiffyTutorialnahuelbrizu.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title={t('projects.logapi.title')}
              description={t('projects.logapi.desc')}
              link="https://github.com/nahuelbrizu/log_api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title={t('projects.hashtag.title')}
              description={t('projects.hashtag.desc')}
              link="https://github.com/nahuelbrizu/hashtag_searcher"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

