import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col sm={6}>{new Date().getFullYear()} © Adotar.</Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block">
                Idealizado e Desenvolvido por{" "}
                <a href="https://github.com/jpcchaves" target="_blank" rel="noreferrer">
                  jpcchaves
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
