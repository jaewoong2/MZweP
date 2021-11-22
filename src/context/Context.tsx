import { createContext, useCallback, useState } from "react";
import { MBTI_NAME, UserContextType } from "../assets/types";
import useContextState from "../hooks/useContextState";

const initialUserState: UserContextType = {
  user: {
    mbti: "ESTP",
    currentPage: "HOME",
    userName: "",
    isLoggedin: false,
    isSetted: false,
    setMbti: (value: MBTI_NAME) => {},
    setCurrentPage: (value: "HOME" | "MISSION" | "SETTING") => {},
    setUserName: (value: string) => {},
    setIsLoggedin: (login: boolean) => {},
    setIsSetted: (login: boolean) => {},
  },
  setUser: () => {},
};

export const UserContext = createContext(initialUserState);

const UserContextProvider: React.FC = ({ children }) => {
  const [mbti, setMbti] =
    useContextState<UserContextType["user"]["mbti"]>("ESTP");
  const [currentPage, setCurrentPage] =
    useContextState<UserContextType["user"]["currentPage"]>("HOME");
  const [userName, setUserName] = useContextState<string>("");
  const [isLoggedin, setIsLoggedin] = useContextState<boolean>(true);
  const [isSetted, setIsSetted] = useContextState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        user: {
          mbti,
          currentPage,
          userName,
          isLoggedin,
          setMbti,
          setCurrentPage,
          setUserName,
          setIsLoggedin,
          isSetted,
          setIsSetted,
        },
        setUser: () => {},
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
