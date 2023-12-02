import { notify } from "components/common/notify";
import { LoginRequestDTO } from "domain/DTO/auth/LoginRequestDTO";
import { postLogin } from "helpers/fakebackend_helper";
import useLoading from "hooks/loading/useLoading";
import { useNavigation } from "hooks/navigate/useNavigation";
import { useAppDispatch } from "hooks/redux/useRedux";
import { loadAuthError, loadClearError } from "slices/auth/login/reducer";

interface IUseLogin {
  isLoading: boolean;
  login: (loginRequestDTO: LoginRequestDTO) => void;
}

const useLogin = (): IUseLogin => {
  const { navigateTo } = useNavigation();
  const dispatch = useAppDispatch();

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
    try {
      const data = await postLogin(loginRequestDTO);
      sessionStorage.setItem("authUser", JSON.stringify(data));
      handleRememberUser(loginRequestDTO);

      notify("Usuario autenticado com sucesso!", "success");

      navigateTo("/pets");
    } catch (error: any & string) {
      dispatch(loadAuthError({ errorMessage: error, hasError: true }));
      handleClearErrorMessage();
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { login, isLoading };
};

export default useLogin;
