import React, { useEffect, createContext, useState } from "react";

export const CurrentUserContext = createContext(null);
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/api/me/profile") // fetch Back End Server for current user's data
      .then((res) => res.json())
      .then((data) => {
        // Our data will give us access to an object that contains a single key/pair of 'profile'
        setCurrentUser(data); // We need to update the currentUser, and set the status to idle.
      });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
