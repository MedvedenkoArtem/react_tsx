import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";

function RandomCrafts() {
const navigate = useNavigate();


  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Unmounting
    return () => {
      console.log("Page RandonCrafts UNMOUNTING")
    }
  }, [])

  return (
    <PageWrapper>
      
      <h1>RandomCrafts</h1>

      <p>RandomCrafts creates unique handmade products.</p>

       <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  
  );
}

export default RandomCrafts;