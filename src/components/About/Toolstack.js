import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLinux,
    SiRuby,
    SiPostman,
    SiAmazon,
    SiMysql,
} from "react-icons/si";
import {DiBootstrap, DiDatabase, DiDocker, DiGithub, DiGithubAlt, DiNodejs} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRuby />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDatabase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiBootstrap />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGithub />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazon />
      </Col>
    </Row>
  );
}

export default Toolstack;
