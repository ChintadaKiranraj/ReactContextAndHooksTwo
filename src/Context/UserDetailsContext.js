import React, { useState, createContext } from "react";

export const UserDetailsContext = createContext();

const UserDetailsProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: "Kiranraj",
    email: "kiranrajchintada302@gmail.com",
  });
  return (
    <UserDetailsContext.Provider value={userDetails}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
