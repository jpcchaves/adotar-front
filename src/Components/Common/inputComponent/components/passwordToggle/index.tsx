interface IProps {
  passwordShow: boolean;
  togglePasswordShow: () => void;
  invalid: boolean | undefined;
}

const PasswordToggle = ({ invalid, passwordShow, togglePasswordShow }: IProps) => {
  return (
    <button
      className={`btn btn-link position-absolute end-0 top-0 me-${invalid ? "4" : "0"} text-decoration-none text-muted`}
      type="button"
      id="password-addon"
      onClick={togglePasswordShow}
    >
      <i className={`${passwordShow ? "ri-eye-off-fill" : "ri-eye-fill"} align-middle`}></i>
    </button>
  );
};

export default PasswordToggle;
