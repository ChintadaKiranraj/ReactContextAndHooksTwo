import React, { useContext } from "react";
import { Heading, ContainerEl } from "../../StyledComponents/StyledComponents";
import { UserDetailsContext } from "../../Context/UserDetailsContext.js";

export const Ccomponent = () => {
  const userDetails = useContext(UserDetailsContext);
  return (
    <ContainerEl>
      <Heading>Component C</Heading>
      <div>
        <p>Name: {userDetails.name}</p>
        <p>Email:{userDetails.email}</p>
      </div>
    </ContainerEl>
  );
};
