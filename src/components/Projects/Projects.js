import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
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
              imgPath={chatify}
              isBlog={false}
              title={t('projects.dashboard.title')}
              description={t('projects.dashboard.desc')}
              link="https://github.com/nahuelbrizu/dashboard_next"
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

