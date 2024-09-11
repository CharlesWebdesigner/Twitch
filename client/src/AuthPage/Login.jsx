import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validatePassword,
} from "./shared/validators";
export const Login = ({ switchAuthHandler }) => {
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
  });
  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };
  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };
  return (
    <div className="login-container">
      <Logo text={"Login to account"} />
      <form action="" className="auth-form">
        <AuthInput
          field="email"
          label="Email"
          type="text"
          value={formState.email.value}
          onBlurHandler={handleInputValidationOnBlur}
          onChangeHandler={handleInputValueChange}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        />
        <AuthInput
          field="password"
          label="Password"
          type="password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <button>Log in</button>
      </form>
      <span className="auth-form-switch-label" onClick={switchAuthHandler}>
        Don't have an account ? Sign up
      </span>
    </div>
  );
};
