import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { setPageTitle } from "utils/pageTitle";
import usePets from "../../hooks/usePets";

const PetsList = () => {
  const { getPetsList } = usePets();

  useEffect(() => {
    getPetsList();
  }, []);

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

export default PetsList;
