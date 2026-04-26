  import React from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import homeLogo from "../../Assets/home-main.svg";
  import Particle from "../Particle";
  import Home2 from "./Home2";
  import Type from "./Type";
  import { useTranslation } from "react-i18next";
  
  function Home() {
    const { t } = useTranslation();

    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  {t('home.hi')}{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
  
                <h1 className="heading-name">
                  {t('home.im')}
                  <strong className="main-name"> {t('home.name')}</strong>
                </h1>
  
                <div className="typewriter-container">
                  <Type />
                </div>
              </Col>
  
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    );
  }
  
  export default Home;
