import { createContext, useState } from "react";

type Employee = {
  name: string;
  surname: string;
  age: string;
  job: string;
};

type ContextType = {
  employee: Employee | null;
  setEmployee: (employee: Employee) => void;
};

export const EmployeeContext = createContext<ContextType>({
  employee: null,
  setEmployee: () => {},
});

export const EmployeeProvider = ({ children }: any) => {
  const [employee, setEmployee] = useState<Employee | null>(null);

  return (
    <EmployeeContext.Provider value={{ employee, setEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};