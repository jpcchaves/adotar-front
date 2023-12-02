import { useNavigate } from "react-router-dom";

interface IUseNavigation {
  navigateTo: (path: string) => void;
}

export const useNavigation = (): IUseNavigation => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return { navigateTo };
};
