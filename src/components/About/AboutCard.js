import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola!!, Soy <span className="purple">Nahuel Brizuela </span>
            de <span className="purple"> Buenos Aires, Argentina.</span>
            <br />Soy un Programador Autodidacta
            <br />
            <br />
            Ademas de programar.. Tambien me gusta
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />   Buscar Nuevas Tecnologias
            </li>
            <li className="about-activity">
              <ImPointRight />  Practicar instrumento 🎸
            </li>
            <li className="about-activity">
              <ImPointRight />  Viajar
            </li>
            <li className="about-activity">
              <ImPointRight />  Hacer Deportes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nahuel Brizuela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
