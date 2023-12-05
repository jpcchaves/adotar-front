import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { setPageTitle } from "utils/pageTitle";
import usePets from "../../hooks/usePets";
import ImageCard from "components/common/imageCardComponent";

const PetsList = () => {
  const { listPets } = usePets();

  useEffect(() => {
    listPets();
  }, []);

  setPageTitle("Pets");

  const cardData = [
    {
      buttonLabel: "Ver detalhes",
      title: "Card title",
      description: "card description here klo0reoernowirejdjfhaskf",
      imageUrl: "https://random.dog/2059c82d-452f-4d80-bb11-818da1451511.jpg",
    },
    {
      buttonLabel: "Ver detalhes",
      title: "Card title",
      description: "card description here klo0reoernowirejdjfhaskf",
      imageUrl: "https://random.dog/e2032897-2617-4963-be00-947e5b9afda6.jpg",
    },
    {
      buttonLabel: "Ver detalhes",
      title: "Card title",
      description: "card description here klo0reoernowirejdjfhaskf",
      imageUrl: "https://random.dog/e2032897-2617-4963-be00-947e5b9afda6.jpg",
    },
    {
      buttonLabel: "Ver detalhes",
      title: "Card title",
      description: "card description here klo0reoernowirejdjfhaskf",
      imageUrl: "https://random.dog/20ce0116-cd55-4370-a728-ed6f37fc6c4b.jpg",
    },
    {
      buttonLabel: "Ver detalhes",
      title: "Card title",
      description: "card description here klo0reoernowirejdjfhaskf",
      imageUrl: "https://random.dog/ef38fc20-7a55-492f-87c7-2ace1e88dee3.jpg",
    },
    {
      buttonLabel: "Ver detalhes",
      title: "Card title",
      description: "card description here klo0reoernowirejdjfhaskf",
      imageUrl: "https://random.dog/13c74c16-afc6-4ca3-bbd8-65a625ceb77b.jpg",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            {cardData.map((card, index) => (
              <Col key={index} sm={6} md={4} lg={4}>
                <ImageCard
                  buttonLabel={card.buttonLabel}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PetsList;
