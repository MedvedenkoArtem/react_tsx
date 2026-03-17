import { useContext } from "react";
import { MessageContext } from "../BlogManagement/BlogManagement";

import { SectionTitle, SectionWrapper } from "./styles";

function Message() {
  const message = useContext(MessageContext);

  return (
    <SectionWrapper>
      <SectionTitle>{message}</SectionTitle>
    </SectionWrapper>
  );
}

export default Message;