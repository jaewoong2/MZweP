import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { MBTI_NAME, UserContextType } from "../assets/types";
import useContextState from "../hooks/useContextState";

const initialUserState: UserContextType = {
  user: {
    displayName: "",
    uid: "",
    photoURL: "",
    hashtag: "",
    finished: [],
    point: 0,
    mbti: "ESTP",
    currentPage: "HOME",
    setHashtag: (value: string) => {},
    setMbti: (value: MBTI_NAME) => {},
    setCurrentPage: (value: "HOME" | "MISSION" | "SETTING") => {},
  },
  setUser: (USER: UserContextType["user"]) => {},
};

export const UserContext = createContext(initialUserState);

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser_] = useState<UserContextType["user"]>(
    initialUserState.user
  );

  const setUser = useCallback((value) => {
    setUser_((prev) => {
      return { ...prev, ...value };
    });
  }, []);

  const value = useMemo(
    () => ({
      mbti: user?.mbti,
      currentPage: user?.currentPage,
      hashtag: user?.hashtag,
      setHashtag: (hashtag: string) => setUser({ hashtag }),
      setCurrentPage: (currentPage: UserContextType["user"]["currentPage"]) =>
        setUser({ currentPage }),
      setMbti: (mbti: UserContextType["user"]["mbti"]) => setUser({ mbti }),
    }),
    [user, setUser]
  );

  return (
    <UserContext.Provider
      value={{
        user: { ...user, ...value },
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
