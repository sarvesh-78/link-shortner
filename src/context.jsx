/* eslint-disable react/prop-types */

import {createContext, useContext, useEffect} from "react";
import {getCurrentUser} from "./db/apiAuth";
import useFetch from "./hooks/use-fetch";

const UrlContext = createContext();

const UrlProvider = ({children}) => {
  const {data: user, loading, fn: fetchUser} = useFetch(getCurrentUser);

  // checking is the user is currently logged in or not 
  const isAuthenticated = user?.role === "authenticated";

  //when ever app is refreshed it will fetch user again and again 
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    //We are providing custom values to out app thorugh Provider
    <UrlContext.Provider value={{user, fetchUser, loading, isAuthenticated}}>
      {children}
    </UrlContext.Provider>
  );
};

// We are returnign the Context in UrlState so every time we want to access the state of app we just need UrlState
export const UrlState = () => {
  return useContext(UrlContext);
};

export default UrlProvider;