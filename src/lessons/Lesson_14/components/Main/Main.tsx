// ШАГ 1: Импортируем функцию createContext из библиотеки react
import { useState, createContext } from "react";
import Button from "components/Button/Button";

import Section from "lessons/Lesson_14/components/Section/Section";

import { MainTitle, MainWrapper } from "./styles";
import { type UserData, type UserDataContext } from "./types";

// ШАГ 2: Создаем котекст - глобальное хранилище данных, которое мы хотим передать вниз по дереву, т.е все что находится в return компонента MAIN
export const MainContext = createContext<UserDataContext>({
  userData: undefined,
  setUserData: () => {},
});

function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
    // Предположим, что вы получили данные пользователя в константе userResponse, используя GET запрос по сети
    const userResponse: UserData = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };

    setUserData(userResponse);
  };

  console.log(userData);
  return (
    // ШАГ 3: Обернуть все что у нас в return, с помощью MainContext.Provider и передать в пропсу value, то что мы хотим передать компоненту Content
    <MainContext.Provider
      value={{ userData: userData, setUserData: setUserData }}
    >
      <MainWrapper>
        <MainTitle>Main Component</MainTitle>
        <Button name="Get User Data" onClick={getUserData} />
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
