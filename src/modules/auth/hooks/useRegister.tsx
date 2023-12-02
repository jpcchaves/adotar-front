import { notify } from "components/common/notify";
import { RegisterRequestDTO } from "domain/DTO/auth/RegisterRequestDTO";
import { postRegister } from "helpers/fakebackend_helper";
import useLoading from "hooks/loading/useLoading";
import { useNavigation } from "hooks/navigate/useNavigation";
import { useAppDispatch } from "hooks/redux/useRedux";
import { loadUserEmail } from "slices/auth/login/reducer";

interface IUseRegister {
  register: (registerRequestDto: RegisterRequestDTO) => void;
  isLoading: boolean;
}

const useRegister = (): IUseRegister => {
  const { isLoading, setLoading } = useLoading();
  const { navigateWithTimer } = useNavigation();
  const dispatch = useAppDispatch();

  const register = async (registerRequestDto: RegisterRequestDTO) => {
    setLoading(true);
    try {
      await postRegister(registerRequestDto);
      notify("Usuário cadastrado com sucesso! Você será redirecionado para a tela de login!", "success");
      navigateWithTimer("/entrar", 2000);
      dispatch(loadUserEmail({ email: registerRequestDto.email }));
    } catch (error: any & string) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { register, isLoading };
};

export default useRegister;
