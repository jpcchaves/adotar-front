import { LoginRequestDTO } from "domain/DTO/auth/LoginRequestDTO";
import { postLogin } from "helpers/fakebackend_helper";

const useLogin = () => {
  const login = async (loginRequestDTO: LoginRequestDTO) => {
    try {
      const data = await postLogin(loginRequestDTO);
      sessionStorage.setItem("authUser", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  return { login };
};

export default useLogin;
