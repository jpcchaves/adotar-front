import { TypeOptions, toast } from "react-toastify";

export const notify = (title: string, variant: TypeOptions) => {
  toast(title, {
    type: variant,
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
  });
};
