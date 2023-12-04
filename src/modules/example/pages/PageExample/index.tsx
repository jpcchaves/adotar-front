import CardComponent from "modules/example/components/cardComponent";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { setPageTitle } from "utils/pageTitle";
import BreadCrumb from "../../../../components/common/BreadCrumb";
import { HttpMethod, httpRequest } from "../../../../utils/http";

export const EXAMPLE_API_URL = "https://jsonplaceholder.typicode.com/photos?_limit=15";

const PageExample = () => {
  const [photos, setPhotos] = useState<any[]>([]);

  const getPhotos = async () => {
    httpRequest<void, any[]>(HttpMethod.GET, EXAMPLE_API_URL, undefined, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setPhotos(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  setPageTitle("Example Page");

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb pageTitle="Example" title="Test" />
          <Row>
            {(photos || []).map((p) => (
              <Col key={p.id} sm={6} md={6} lg={3}>
                <CardComponent p={p} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PageExample;
