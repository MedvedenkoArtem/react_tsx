import { createContext, useState } from "react";

type Employee = {
  name: string;
  surname: string;
  age: string;
  job: string;
};

type ContextType = {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
};

export const EmployeeContext = createContext<ContextType>({
  employees: [],
  addEmployee: () => {},
});

export const EmployeeProvider = ({ children }: any) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = (employee: Employee) => {
    setEmployees((prev) => [...prev, employee]); // 🔥 добавление в массив
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};