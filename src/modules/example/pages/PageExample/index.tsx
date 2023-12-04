import useNotify from "hooks/notify/useNotify";
import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { setPageTitle } from "utils/pageTitle";
import BreadCrumb from "../../../../components/common/BreadCrumb";
import { HttpMethod, httpRequest } from "../../../../utils/http";

export const EXAMPLE_API_URL = "https://jsonplaceholder.typicode.com/photos?_limit=15";

const PageExample = () => {
  const { notify } = useNotify();
  const [photos, setPhotos] = useState<any[]>([]);

  const getPhotos = async () => {
    httpRequest<void, any[]>(HttpMethod.GET, EXAMPLE_API_URL)
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
              <Col key={p.id} sm={6} md={3}>
                <Card>
                  <CardImg alt="Card image cap" src={p.url} top width="100%" />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This
                      content is a little bit longer.
                    </CardText>
                    <Button className={"w-100"} onClick={() => notify("Seeing details of pet", "info")}>
                      Ver Detalhes
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PageExample;
