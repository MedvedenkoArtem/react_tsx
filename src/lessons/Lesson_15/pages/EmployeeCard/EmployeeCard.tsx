import { useContext } from "react";
import { EmployeeContext } from "lessons/Lesson_15/context/EmployeeContext";

import { CardWrapper, Field, Label, Value } from "./styles";

function EmployeeCard() {
  const { employees } = useContext(EmployeeContext);

  if (!employees.length) {
    return <p>No employees created</p>;
  }

  return (
    <>
      {employees.map((employee, index) => (
        <CardWrapper key={index}>
          <Field>
            <Label>Name</Label>
            <Value>{employee.name}</Value>
          </Field>

          <Field>
            <Label>Surname</Label>
            <Value>{employee.surname}</Value>
          </Field>

          <Field>
            <Label>Age</Label>
            <Value>{employee.age}</Value>
          </Field>

          <Field>
            <Label>Job Position</Label>
            <Value>{employee.job}</Value>
          </Field>
        </CardWrapper>
      ))}
    </>
  );
}

export default EmployeeCard;