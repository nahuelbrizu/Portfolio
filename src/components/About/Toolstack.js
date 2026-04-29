import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiUbuntu,
  SiVmware,
  SiMicrosoft,
  SiJira,
  SiWindowsterminal,
  SiPostman,
  SiDocker,
  SiProxmox,
} from "react-icons/si";
import { DiGithub } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVmware />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiProxmox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindowsterminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
