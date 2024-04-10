import React from "react";
import { Bcomponent } from "../Bcomponent/Bcomponent";
import { Heading } from "../../StyledComponents/StyledComponents";
import UserDetailsProvider from "../../Context/UserDetailsContext";
export const Acomponent = () => {
  return (
    <UserDetailsProvider>
      <Heading>Component A</Heading>
      <Bcomponent />
    </UserDetailsProvider>
  );
};

//here componetn b can user the user details and coponent c  can also user the user details data because componet c is   in the component B and component B is in the
//UserDetailsProvider
//or we can directly wrap the UserDetailsProvider for C component and C component can directly can use the UserDetails
