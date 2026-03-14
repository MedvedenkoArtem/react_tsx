import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";

function YellowCow() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    console.log("Page YellowCow MOUNTED");

    return () => {
      console.log("Page YellowCow UNMOUNTING");
    };
  }, []);

  return (
    <PageWrapper>
      <h1>YellowCow</h1>

      <p>YellowCow is a creative digital studio.</p>

      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default YellowCow;