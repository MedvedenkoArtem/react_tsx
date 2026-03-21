import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { EmployeeContext } from "lessons/Lesson_15/context/EmployeeContext";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { CreateEmployseContainer, InputsContainer, Title } from "./styles";

const validationSchema = Yup.object({
  name: Yup.string().min(2).max(50).required(),
  surname: Yup.string().max(15).required(),
  age: Yup.string().min(1).max(3).required(),
  job: Yup.string().max(30),
});

function Create_Employee() {
  const { setEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      job: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setEmployee(values); 
      navigate("/EmployeeCard"); 
    },
  });

  return (
    <CreateEmployseContainer onSubmit={formik.handleSubmit}>
      <Title>Create Employee</Title>

      <InputsContainer>
        <Input
          id="name"
          name="name"
          placeholder="Name"
          label="Name*"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />

        <Input
          id="surname"
          name="surname"
          placeholder="Surname"
          label="Surname*"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.errors.surname}
        />

        <Input
          id="age"
          name="age"
          placeholder="Age"
          label="Age*"
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.errors.age}
        />

        <Input
          id="job"
          name="job"
          placeholder="Job Position"
          label="Job Position"
          value={formik.values.job}
          onChange={formik.handleChange}
          error={formik.errors.job}
        />
      </InputsContainer>

      <Button name="CREATE" type="submit" />
    </CreateEmployseContainer>
  );
}

export default Create_Employee;