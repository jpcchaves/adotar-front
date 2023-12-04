import { useAppSelector } from "hooks/redux/useRedux";
import { TypeOptions, toast } from "react-toastify";

interface IUseNotify {
  notify: (title: string, variant: TypeOptions) => void;
}

const useNotify = (): IUseNotify => {
  const { layoutModeType } = useAppSelector((state) => state.Layout);

  const notify = (title: string, variant: TypeOptions) => {
    toast(title, {
      type: variant,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      theme: layoutModeType === "light" ? "light" : "dark",
    });
  };

  return { notify };
};

export default useNotify;
