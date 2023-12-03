import { notify } from "components/common/notify";
import { RegisterRequestDTO } from "domain/DTO/auth/RegisterRequestDTO";
import { FormikValues } from "formik";
import useLoading from "hooks/loading/useLoading";
import { useNavigation } from "hooks/navigate/useNavigation";
import { useAppDispatch } from "hooks/redux/useRedux";
import { loadUserEmail } from "slices/auth/login/reducer";
import { HttpMethod, httpRequest } from "../../../utils/http";
import { ApiMessageResponse } from "../../../domain/models/ApiMessageResponse";
import { REACT_APP_API_REGISTER_ENDPOINT, REACT_APP_API_REGISTER_V1 } from "../../../contants/env";

interface IProps {
  validation: FormikValues;
}

interface IUseRegister {
  register: (registerRequestDto: RegisterRequestDTO) => void;
  isLoading: boolean;
}

const useRegister = ({ validation }: IProps): IUseRegister => {
  const { isLoading, setLoading } = useLoading();
  const { navigateWithTimer } = useNavigation();
  const dispatch = useAppDispatch();

  const register = async (registerRequestDto: RegisterRequestDTO) => {
    setLoading(true);
    await httpRequest<RegisterRequestDTO, ApiMessageResponse>(
      HttpMethod.POST,
      `${REACT_APP_API_REGISTER_V1}/${REACT_APP_API_REGISTER_ENDPOINT}`,
      registerRequestDto,
    )
      .then(() => {
        notify("Usuário cadastrado com sucesso! Você será redirecionado para a tela de login!", "success");
        navigateWithTimer("/entrar", 2000);
        dispatch(loadUserEmail({ email: registerRequestDto.email }));
        validation.resetForm();
      })
      .catch((err) => {
        notify(err, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { register, isLoading };
};

export default useRegister;
