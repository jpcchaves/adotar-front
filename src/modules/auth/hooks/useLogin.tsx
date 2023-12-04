import { LoginRequestDTO } from "domain/DTO/auth/LoginRequestDTO";
import useLoading from "hooks/loading/useLoading";
import { useNavigation } from "hooks/navigate/useNavigation";
import useNotify from "hooks/notify/useNotify";
import { useAppDispatch } from "hooks/redux/useRedux";
import { loadAuthError, loadClearError } from "slices/auth/login/reducer";
import { REACT_APP_API_LOGIN_ENDPOINT, REACT_APP_API_LOGIN_V2 } from "../../../contants/env";
import { LoginResponseDTO } from "../../../domain/DTO/auth/LoginResponseDTO";
import { HttpMethod, httpRequest, setAuthToken } from "../../../utils/http";

interface IUseLogin {
  isLoading: boolean;
  login: (loginRequestDTO: LoginRequestDTO) => void;
}

const useLogin = (): IUseLogin => {
  const { navigateTo } = useNavigation();
  const dispatch = useAppDispatch();
  const { notify } = useNotify();

  const { isLoading, setLoading } = useLoading();

  const handleClearErrorMessage = () => {
    setTimeout(() => {
      dispatch(loadClearError());
    }, 5000);
  };

  const handleRememberUser = ({ email, remember }: LoginRequestDTO) => {
    if (remember) {
      localStorage.setItem("userEmail", JSON.stringify(email));
    } else {
      return;
    }
  };

  const login = async (loginRequestDTO: LoginRequestDTO) => {
    setLoading(true);
    await httpRequest<LoginRequestDTO, LoginResponseDTO>(
      HttpMethod.POST,
      `${REACT_APP_API_LOGIN_V2}/${REACT_APP_API_LOGIN_ENDPOINT}`,
      loginRequestDTO,
    )
      .then((data: LoginResponseDTO) => {
        sessionStorage.setItem("authUser", JSON.stringify(data));
        handleRememberUser(loginRequestDTO);
        setAuthToken(data.accessToken);
        notify("Usuario autenticado com sucesso!", "success");
        navigateTo("/pets");
      })
      .catch((err: string) => {
        dispatch(loadAuthError({ errorMessage: err, hasError: true }));
        handleClearErrorMessage();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { login, isLoading };
};

export default useLogin;
