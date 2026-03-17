// ШАГ 4: Импортируем хук useContext из библиотеки react
import { useContext } from "react";

// ШАГ 5: Импортируем созданный нами в компоненте Main контекст MainContext
import { MainContext } from "lessons/Lesson_14/components/Main/Main";

import Button from "components/Button/Button";

import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

function Content() {
  // ШАГ 6: Получить доступ к данным, хранящимся в контексте
  const { userData, setUserData } = useContext(MainContext);

  const deleteUser = () => {
    setUserData(undefined);
  };

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      {/* Если userData === undefined, то выражение userData.fullName выдаст ошибку, т.к в таком случае у нас получается следующая операция
      undefined.fullName. Поэтому нам нужно сделать проверку, если userData === undefined, то мы скрываем ContentInfo,
      иначе если  userData равен ожидаемому обьекту, то мы ContentInfo показываем
      */}
      {!!userData && (
        <>
          <ContentInfo>Fullname: {userData.fullName}</ContentInfo>
          <ContentInfo>Age: {userData.age} </ContentInfo>
          <ContentInfo>Job: {userData.jobPosition}</ContentInfo>
          <Button isRed name="Delete user" onClick={deleteUser} />
        </>
      )}
    </ContentWrapper>
  );
}

export default Content;
