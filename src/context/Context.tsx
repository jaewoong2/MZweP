import { createContext, useCallback, useState } from "react";
import { MBTI_NAME, UserContextType } from "../assets/types";
import useContextState from "../hooks/useContextState";

const initialUserState: UserContextType = {
  user: {
    displayName: "",
    uid: "",
    photoURL: "",
    hashtag: "",
    mbti: "ESTP",
    currentPage: "HOME",
    userName: "",
    isLoggedin: false,
    isSetted: false,
    setHashtag: (value: string) => {},
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
  const [hashtag, setHashtag] = useContextState<string>("");

  return (
    <UserContext.Provider
      value={{
        user: {
          hashtag,
          mbti,
          currentPage,
          userName,
          isLoggedin,
          setMbti,
          setCurrentPage,
          setUserName,
          setIsLoggedin,
          setHashtag,
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
