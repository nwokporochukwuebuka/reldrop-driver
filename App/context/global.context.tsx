import { useMutation } from "@tanstack/react-query";
import { getValueFor, removeValueFor } from "App/hooks/SecureStore";
import { ApiServiceAuth } from "App/service/auth-services";
import { createContext, useContext, useEffect, useState } from "react";

type ErrorContextType = {
  error?: any;
  isAuth?: any;
  fetchUser?: any;
  login?: any;
  userData?: any;
  logout?: any;
  setError?: React.Dispatch<React.SetStateAction<string>>;
} | null;

interface Context {
  children?: any;
  error?: any;
  isAuth?: any;
  fetchUser?: any;
  userData?: any;
  login?: any;
  logout?: any;
  setError?: any;
}

const MainContext = createContext<ErrorContextType>(null);

export const MainProvider: React.FC = ({ children }: Context) => {
  // Use this type in your state initialization
  const [error, setError] = useState<string>("");
  const [secureValue, setSecureValue] = useState<any>("");
  const [userData, setUserData] = useState<any>("");
  const fetchSecureValue = async () => {
    const value = await getValueFor("token");
    setSecureValue(value);
    //console.log(secureValue, "context");
  };
  const fetchUser = async () => {
    const value = await getValueFor("user_data");
    if (value) {
      setUserData(JSON.parse(value));
    }
    //console.log(secureValue, "context");
  };
  const login = () => {
    fetchSecureValue();
    // Navigate to the Home screen after logging in
  };

  const logout = () => {
    removeValueFor("token");
    removeValueFor("user_data");
    setTimeout(() => {
      fetchSecureValue();
    }, 2000);
    // Optionally navigate back to AuthNavigator after logging out
  };
  useEffect(() => {
    fetchSecureValue();
    fetchUser();
  }, []);

  return (
    <MainContext.Provider
      value={{
        isAuth: secureValue,
        error,
        userData,
        fetchUser,
        setError,
        login,
        logout,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export const useAuth = () => useContext(MainContext);

export default MainContext;
