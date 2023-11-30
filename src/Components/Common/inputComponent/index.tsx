import { FocusEvent, FormEvent, useState } from "react";
import { FormFeedback, Input, InputProps, Label } from "reactstrap";
import { InputType } from "reactstrap/types/lib/Input";
import PasswordToggle from "./components/passwordToggle";
import RequiredIndicator from "./components/requiredIndicator";

type InputComponentOmittedProps = "onChange" | "onBlur" | "value" | "type";
type AllowedInputTypes = "password" | "text";

interface IProps extends Omit<InputProps, InputComponentOmittedProps> {
  inputLabel: string;
  invalid?: boolean;
  isRequired?: boolean;
  type?: AllowedInputTypes;
  onChange: (e?: FormEvent<HTMLInputElement>) => void;
  onBlur: (e?: FocusEvent<HTMLInputElement>) => void;
  inputValue: string;
  errorMessage?: string;
  inputIdentifier: string;
}

const PASSWORD_TYPE: InputType = "password";

const InputComponent = ({
  inputIdentifier,
  inputValue,
  onBlur,
  onChange,
  errorMessage,
  inputLabel,
  invalid,
  isRequired = false,
  type = "text",
  ...rest
}: IProps) => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const togglePasswordShow = () => {
    setPasswordShow((prevState) => !prevState);
  };

  const isInputPassword = (type: InputType) => {
    return type === PASSWORD_TYPE;
  };

  const isPassword = isInputPassword(type);

  const isPasswordVisible = passwordShow ? "text" : PASSWORD_TYPE;

  return (
    <>
      <Label>
        {inputLabel} {isRequired && <RequiredIndicator />}
      </Label>
      <div className={`${isPassword ? "position-relative auth-pass-inputgroup mb-3" : ""}`}>
        <Input
          {...rest}
          name={inputIdentifier}
          id={inputIdentifier}
          value={inputValue}
          type={isPassword ? isPasswordVisible : type}
          className="form-control pe-5"
          onChange={onChange}
          onBlur={onBlur}
          invalid={invalid}
        />
        {invalid && <FormFeedback type="invalid">{errorMessage}</FormFeedback>}
        {isPassword && (
          <PasswordToggle passwordShow={passwordShow} togglePasswordShow={togglePasswordShow} invalid={invalid} />
        )}
      </div>
    </>
  );
};

export default InputComponent;
