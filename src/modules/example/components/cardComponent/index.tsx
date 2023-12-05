import useNotify from "hooks/notify/useNotify";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

import "./style/index.scss";

const CardComponent = ({ p }: { p: any }) => {
  const { notify } = useNotify();

  return (
    <Card className="custom-card shadow-lg">
      <div className="card-img-inner-wrapper">
        <CardImg alt="Card image cap" src={p.url} top width="100%" height="100%" />
        <div className="overlay">
          <div className="overlay-small-image">
            <img src={p.url} alt={p.title} width="100%" height="100%" />
          </div>
          <small className="mt-2 text-white">{p.title.split(" ")[0]}</small>
        </div>
      </div>
      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
        </CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
          little bit longer.
        </CardText>
        <Button className="w-100" onClick={() => notify("Seeing details of pet", "info")}>
          Ver Detalhes
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
