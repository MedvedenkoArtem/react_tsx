import { Link, useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, ButtonControl } from "./styles";
import { useEffect } from "react";

function Clients() {
    const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Unmounting
    return () => {
      console.log("Page Clients UNMOUNTING")
    }
  }, [])
  return (
    <PageWrapper>
      
           <h1>Our Clients</h1>

      <ul>
        <li>
          <Link to="/clients/lifewaves">LifeWaves</Link>
        </li>

        <li>
          <Link to="/clients/randomcrafts">RandomCrafts</Link>
        </li>

        <li>
          <Link to="/clients/yellowcow">YellowCow</Link>
        </li>
      </ul>
  <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  
  );
}

export default Clients;