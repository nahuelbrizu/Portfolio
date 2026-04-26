import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useTranslation } from "react-i18next";
import { projectsData } from "./projectsData";

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
          {projectsData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={t(project.titleKey)}
                description={t(project.descriptionKey)}
                link={project.link}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
