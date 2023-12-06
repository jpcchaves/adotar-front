import {
  REACT_APP_API_PETS_ENDPOINT,
  REACT_APP_API_PETS_V2,
  REACT_APP_API_SAVED_PETS_ENDPOINT,
  REACT_APP_API_SAVED_PETS_V1,
} from "contants/env";
import { ApiMessageResponse } from "domain/models/ApiMessageResponse";
import { ApiResponsePaginated } from "domain/models/ApiResponsePaginated";
import useLoading from "hooks/loading/useLoading";
import useNotify from "hooks/notify/useNotify";
import { useAppDispatch, useAppSelector } from "hooks/redux/useRedux";
import { loadPets, loadPetsPaginated } from "slices/pets/reducer";
import { HttpMethod, httpRequest } from "utils/http";
import { PetModelMin } from "../models/PetModel";
import { updatePetFavorite } from "../utils/upatePetFavorite";

const FAVORITE = true;
const NOT_FAVORITE = false;

const savedPetsUrl = `${REACT_APP_API_SAVED_PETS_V1}/${REACT_APP_API_SAVED_PETS_ENDPOINT}`;
interface IUsePets {
  listPets: (page?: number) => void;
  addSavedPet: (petId: string) => void;
  removeSavedPet: (petId: string) => void;
  isLoading: boolean;
}

const usePets = (): IUsePets => {
  const { notify } = useNotify();
  const { toggleLoading, isLoading } = useLoading();
  const dispatch = useAppDispatch();
  const { pets } = useAppSelector((state) => state.Pets);

  const listPets = async (page: number = 0) => {
    toggleLoading();

    await httpRequest<void, ApiResponsePaginated<PetModelMin>>(
      HttpMethod.GET,
      `${REACT_APP_API_PETS_V2}/${REACT_APP_API_PETS_ENDPOINT}?page=${page}&size=12`,
    )
      .then((res) => {
        handlePetListPagination(res);
      })
      .catch((err) => {
        notify(err, "error");
      })
      .finally(() => {
        toggleLoading();
      });
  };

  const addSavedPet = async (petId: string) => {
    await httpRequest<void, ApiMessageResponse>(HttpMethod.POST, `${savedPetsUrl}/${petId}`)
      .then(({ message }) => {
        notify(message, "success");
        handleUpdatePetFavorite(petId, FAVORITE);
      })
      .catch((err) => {
        notify(err, "error");
        // console.log(err);
      });
  };

  const removeSavedPet = async (petId: string) => {
    await httpRequest<void, ApiMessageResponse>(HttpMethod.DELETE, `${savedPetsUrl}/${petId}`)
      .then(({ message }) => {
        notify(message, "success");
        handleUpdatePetFavorite(petId, NOT_FAVORITE);
      })
      .catch((err) => {
        notify(err, "error");
        // console.log(err);
      });
  };

  const handlePetListPagination = (petsPaginated: ApiResponsePaginated<PetModelMin>) => {
    if (pets && petsPaginated.pageNo > 0) {
      let newData = pets.concat(petsPaginated.content);
      dispatch(
        loadPetsPaginated({
          content: newData,
          last: petsPaginated.last,
          totalElements: petsPaginated.totalElements,
          pageSize: petsPaginated.pageSize,
          pageNo: petsPaginated.pageNo,
          totalPages: petsPaginated.totalPages,
        }),
      );
    } else {
      dispatch(loadPetsPaginated(petsPaginated));
    }
  };

  const handleUpdatePetFavorite = (petId: string, newFavoriteValue: boolean) => {
    updatePetFavorite(pets!, petId, newFavoriteValue);
    dispatch(loadPets(updatePetFavorite(pets!, petId, newFavoriteValue)));
  };

  return { listPets, addSavedPet, removeSavedPet, isLoading };
};

export default usePets;
