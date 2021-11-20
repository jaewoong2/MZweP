import { createContext, useCallback, useState } from "react";
import { MBTI_NAME, UserContextType } from "../assets/types";

const initialUserState: UserContextType = {
  mbti: "ESTP",
  currentPage: "HOME",
  userName: "",
  setMbti: (value: MBTI_NAME) => {},
  setCurrentPage: (value: "HOME" | "MISSION" | "SETTING") => {},
  setUserName: (value: string) => {},
};

export const UserContext = createContext(initialUserState);

const UserContextProvider: React.FC = ({ children }) => {
  const [mbti, setMbti_] = useState<UserContextType["mbti"]>("ESTP");
  const [currentPage, setCurrentPage_] =
    useState<UserContextType["currentPage"]>("HOME");
  const [userName, setUserName_] = useState("");

  const setMbti = useCallback((value: UserContextType["mbti"]) => {
    setMbti_(value);
  }, []);

  const setCurrentPage = useCallback(
    (value: UserContextType["currentPage"]) => {
      setCurrentPage_(value);
    },
    []
  );

  const setUserName = useCallback((value: string) => {
    setUserName_(value);
  }, []);

  return (
    <UserContext.Provider
      value={{
        mbti,
        currentPage,
        userName,
        setMbti,
        setCurrentPage,
        setUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
