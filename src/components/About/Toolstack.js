import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLinux,
    SiRuby,
    SiPostman,
    SiAmazon,
    SiMysql,
} from "react-icons/si";

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
        <SiAmazon />
      </Col>
    </Row>
  );
}

export default Toolstack;
