import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

import { SyntheticEvent } from "react";
import "./style/index.scss";

interface IProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
  cardButtonAction?: (e: SyntheticEvent) => void;
  buttonClasses?: string;
}

const ImageCard = ({ title, description, imageUrl, buttonLabel, cardButtonAction, buttonClasses = "" }: IProps) => {
  buttonClasses = buttonClasses.concat("w-100");

  return (
    <Card className="custom-card shadow-lg">
      <div className="card-img-inner-wrapper">
        <CardImg className="img-wrapper img-fluid" alt="Card image cap" src={imageUrl} top width="100%" height="100%" />
        <div className="overlay">
          <div className="overlay-small-image">
            <img src={imageUrl} alt={title} width="100%" height="100%" />
          </div>
          <small className="mt-2 text-white">{title}</small>
        </div>
      </div>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>

        <CardText>{description}</CardText>
        <Button className={buttonClasses} onClick={cardButtonAction}>
          {buttonLabel}
        </Button>
      </CardBody>
    </Card>
  );
};

export default ImageCard;
