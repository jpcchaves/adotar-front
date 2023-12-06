import { BsGenderFemale, BsGenderMale, BsHeart, BsHeartFill } from "react-icons/bs";
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

import { Gender } from "domain/enum/pet/Gender";
import { PetModelMin } from "modules/pets/models/PetModel";
import { PetPicture } from "modules/pets/models/PetPicture";
import "./style/index.scss";

interface IProps {
  pet: PetModelMin;
}

const getPetFavoritePicture = (petPictures: PetPicture[]) => {
  let favoritePic;
  petPictures.map((p) => {
    if (p.favorite === true) {
      favoritePic = p.imgUrl;
    }
  });
  return favoritePic;
};

const PetCard = ({ pet: { gender, name, type, description, favorite, petPictures } }: IProps) => {
  const favoritePic = getPetFavoritePicture(petPictures);
  return (
    <Card className="custom-card shadow-lg">
      <div className="card-img-inner-wrapper">
        <CardImg
          className="img-wrapper img-fluid"
          alt="Card image cap"
          src={favoritePic}
          top
          width="100%"
          height="100%"
        />
        <div className="overlay">
          <div className="overlay-small-image">
            <img src={favoritePic} alt={name} width="100%" height="100%" />
          </div>
          <small className="mt-2 text-white">{name}</small>
        </div>
      </div>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>

        <CardText>{description}</CardText>

        <div className="my-2 w-100 d-flex justify-content-between gap-2">
          <Button color="ghost">
            {favorite ? <BsHeartFill className="text-danger fs-5 cursor-pointer" /> : <BsHeart />}
          </Button>
          <div>
            {gender === Gender.F ? (
              <BsGenderFemale className="fs-5 cursor-pointer" style={{ color: "pink" }} />
            ) : (
              <BsGenderMale className="text-secondary fs-5 cursor-pointer" />
            )}
          </div>
        </div>

        <Button className={"w-100"}>Ver Detalhes</Button>
      </CardBody>
    </Card>
  );
};

export default PetCard;
