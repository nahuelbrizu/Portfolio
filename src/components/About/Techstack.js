import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMysql,
   DiCss3, DiHtml5, DiPhotoshop, DiApple, DiLinux, DiIllustrator,
} from "react-icons/di";
import {

    SiJava, SiRubygems,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRubygems />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPhotoshop />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiApple />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiIllustrator />
        </Col>
    </Row>
  );
}

export default Techstack;
