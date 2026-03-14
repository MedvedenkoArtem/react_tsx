import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";

function LifeWaves() {
const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Unmounting
    return () => {
      console.log("Page LifeWaves UNMOUNTING")
    }
  }, [])

  return (
    <PageWrapper>
      
      <h1>LifeWaves</h1>

      <p>LifeWaves is a technology company creating innovative products.</p>
  <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  
  );
}

export default LifeWaves;