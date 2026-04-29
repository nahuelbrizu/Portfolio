import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nahuel Brizuela</span> from <span className="purple">Buenos Aires, Argentina.</span>
            <br />
            <br />
            I am an <span className="purple">IT Infrastructure Engineer & Full Stack Developer</span> with a strong focus on <span className="purple">Scalable Automation</span>.
            <br />
            <br />
            I specialize in architecting <span className="purple">Critical Infrastructure</span>, managing <span className="purple">M365 & Intune</span> ecosystems, and developing custom <span className="purple">Node.js</span> solutions to optimize business workflows. Expertise in <span className="purple">MikroTik & Ubiquiti</span> networking and <span className="purple">Cybersecurity</span> systems.
            <br />
            <br />
            Apart from technical work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Advanced IP Video Surveillance</span> (CCTV, AI Analytics & Recording Solutions)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing <span className="purple">Argentinian Folklore</span> (Guitar & Music Theory)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring New Cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming & PC Building
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference through automation and efficiency!"{" "}
          </p>
          <footer className="blockquote-footer">Nahuel Brizuela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
