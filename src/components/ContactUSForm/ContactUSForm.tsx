import { useFormik } from "formik";
import * as Yup from "yup";

import { CONTACT_US_VALUES } from "./types";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { ContactUsContainer, InputsContainer, Title } from "./styles";

const validationSchema = Yup.object({
  [CONTACT_US_VALUES.FULL_NAME]: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be at most 50 characters")
    .required("Full name is required"),

  [CONTACT_US_VALUES.PHONE]: Yup.string()
    .min(4, "Phone must be at least 4 characters")
    .max(20, "Phone must be at most 20 characters")
    .required("Phone is required"),

  [CONTACT_US_VALUES.EMAIL]: Yup.string()
    .min(6, "Email must be at least 6 characters")
    .max(60, "Email must be at most 60 characters")
    .email("Invalid email format")
    .required("Email is required"),
});

function ContactUsForm() {
  const formik = useFormik({
    initialValues: {
      [CONTACT_US_VALUES.FULL_NAME]: "",
      [CONTACT_US_VALUES.PHONE]: "",
      [CONTACT_US_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <ContactUsContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>

      <InputsContainer>
        <Input
          id="full-name-id"
          name={CONTACT_US_VALUES.FULL_NAME}
          type="text"
          placeholder="Your full name"
          label="Full name*"
          value={formik.values[CONTACT_US_VALUES.FULL_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.FULL_NAME]}
        />

        <Input
          id="phone-id"
          name={CONTACT_US_VALUES.PHONE}
          type="text"
          placeholder="Your phone number"
          label="Phone*"
          value={formik.values[CONTACT_US_VALUES.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.PHONE]}
        />

        <Input
          id="email-id"
          name={CONTACT_US_VALUES.EMAIL}
          type="email"
          placeholder="Your email"
          label="Email"
          value={formik.values[CONTACT_US_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.EMAIL]}
        />
      </InputsContainer>

      <Button name="SEND REQUEST" type="submit" />
    </ContactUsContainer>
  );
}

export default ContactUsForm;