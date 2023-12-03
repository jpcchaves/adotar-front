import { useNavigate } from "react-router-dom";

interface IUseNavigation {
  navigateTo: (path: string) => void;
  navigateWithTimer: (path: string, time: number) => void;
}

export const useNavigation = (): IUseNavigation => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const navigateWithTimer = (path: string, time: number) => {
    setTimeout(() => {
      navigateTo(path);
    }, time);
  };

  return { navigateTo, navigateWithTimer };
};
