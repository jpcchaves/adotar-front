import React from "react";
import { Container, Row } from "reactstrap";
import { setPageTitle } from "utils/pageTitle";

const DashboardEcommerce = () => {
  setPageTitle("Pets");

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row></Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
