import { REACT_APP_API_PETS_ENDPOINT, REACT_APP_API_PETS_V2 } from "contants/env";
import { HttpMethod, httpRequest } from "utils/http";

interface IUsePets {
  getPetsList: () => void;
}

const usePets = (): IUsePets => {
  const getPetsList = async () => {
    await httpRequest<any, any>(HttpMethod.GET, `${REACT_APP_API_PETS_V2}/${REACT_APP_API_PETS_ENDPOINT}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return { getPetsList };
};

export default usePets;
