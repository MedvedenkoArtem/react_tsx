import { useFormik } from "formik";
import * as Yup from "yup";

import { LOGIN_FORM_VALUES } from "./types";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, InputsContainer, Title } from "./styles";

const validationSchema = Yup.object({
  [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be at last 16 characters")
    .required("Password is required"),
});

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_VALUES.EMAIL]: "",
      [LOGIN_FORM_VALUES.PASSWORD]: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Email:", values[LOGIN_FORM_VALUES.EMAIL]);
      console.log("Password:", values[LOGIN_FORM_VALUES.PASSWORD]);
    },
  });

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>

      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
        />

        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
      </InputsContainer>

      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;