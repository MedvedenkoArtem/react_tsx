import Message from "homeworks/Homework_13/component/Message/Message";

import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

function Card() {
  return (
    <ContentWrapper>
    <ContentTitle></ContentTitle>
    <ContentInfo><h3>Artem Medvedenko</h3></ContentInfo> 
      <Message />
    </ContentWrapper>
  );
}

export default Card;