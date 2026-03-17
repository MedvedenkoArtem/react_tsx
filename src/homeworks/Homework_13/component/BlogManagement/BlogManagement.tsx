import { useState, createContext } from "react";
import Button from "components/Button/Button";

import Card from "../Card/Card";

import { MainTitle, MainWrapper } from "./styles";

export const MessageContext = createContext<string>("");

function BlogManagement() {
  const [text, setText] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handlePost = () => {
    setMessage(text);
    setText("");
  };

  return (
    <MessageContext.Provider value={message}>
        <MainWrapper>
            <MainTitle>Blog</MainTitle>
  <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your post..."
      />

      <Button name="Запостить" onClick={handlePost} />

      {message && <Card />}
        </MainWrapper>
    
    </MessageContext.Provider>
  );
}

export default BlogManagement;