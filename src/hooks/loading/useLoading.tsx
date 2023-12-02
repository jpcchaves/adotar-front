import { useState } from "react";

interface IUseLoading {
  isLoading: boolean;
  toggleLoading: () => void;
  setLoading: (value: boolean) => void;
}

const useLoading = (): IUseLoading => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  const setLoading = (value: boolean) => {
    setIsLoading(() => value);
  };

  return { isLoading, toggleLoading, setLoading };
};

export default useLoading;
