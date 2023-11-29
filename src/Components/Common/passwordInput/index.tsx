import { FocusEvent, FormEvent, useState } from "react";
import { FormFeedback, Input, Label, type InputProps } from "reactstrap";

type PasswordInputOmittedProps = "onChange" | "onBlur" | "value";

interface IProps extends Omit<InputProps, PasswordInputOmittedProps> {
  inputLabel?: string;
  invalid?: boolean;
  onChange: (e?: FormEvent<HTMLInputElement>) => void;
  onBlur: (e?: FocusEvent<HTMLInputElement>) => void;
  inputValue: string;
  errorMessage?: string;
  inputIdentifier: string;
}

const PasswordInput = ({
  inputLabel = "Senha",
  invalid,
  onChange,
  onBlur,
  inputValue,
  errorMessage,
  inputIdentifier,
  placeholder,
  ...rest
}: IProps) => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const togglePasswordShow = () => {
    setPasswordShow((prevState) => !prevState);
  };

  return (
    <>
      <Label className="form-label" htmlFor={inputIdentifier}>
        {inputLabel}
      </Label>
      <div className="position-relative auth-pass-inputgroup mb-3">
        <Input
          {...rest}
          name={inputIdentifier}
          id={inputIdentifier}
          value={inputValue}
          type={passwordShow ? "text" : "password"}
          className="form-control pe-5"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          invalid={invalid}
        />
        {invalid ? <FormFeedback type="invalid">{errorMessage}</FormFeedback> : null}
        <button
          className={`btn btn-link position-absolute end-0 top-0 me-${
            invalid ? "4" : "0"
          } text-decoration-none text-muted`}
          type="button"
          id="password-addon"
          onClick={togglePasswordShow}
        >
          <i className="ri-eye-fill align-middle"></i>
        </button>
      </div>
    </>
  );
};

export default PasswordInput;
