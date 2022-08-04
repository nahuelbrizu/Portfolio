import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1  style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              <i>Soy</i>
              <b className="purple">   Nahuel   </b>
              un programador autodidacta
              <br />Me enamoré de la programación hace ya muchos años
               Aunque todavia soy un aprendiz
              <br/>
              <br />
              Mis campos de interés son   &nbsp;
              <i>
                <b className="purple"> las nuevas tecnologías y productos web  </b>
              ademas, las áreas relacionadas con el  {" "}
                <b className="purple">
                 aprendizaje profundo en el procesamiento del lenguaje.
                </b>
              </i>
              <br />
              <br />
              También aplico mi pasión a la hora de continuar aprendiendo
              <b className="purple"> habilidades o herramientas </b>
              para poder estar actualizado..
              <br />
              <br />
              <i> Mis Herramientas de
                <b className="purple">  trabajo   </b>
                son
                <b className="purple"> Javascript, Java, Ruby on Rails, Mysql, Html, Css y Ubuntu..  </b>
              </i>
              <br />
              &nbsp;
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nahuelbrizu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nahuelgasbrizuela"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/naawwe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
