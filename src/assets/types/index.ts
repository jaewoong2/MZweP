import { RouteProps } from "react-router-dom";

export interface RouterComponent extends RouteProps, JSX.Element {
    type: string;
    props: {};
    key: string;
}

export interface UserContextType {
    user: {
        userName: string;
        mbti: MBTI_NAME;
        hashtag: string;
        currentPage: "HOME" | "MISSION" | "SETTING";
        isLoggedin: boolean;
        isSetted: boolean;
        setHashtag: (value: string) => void;
        setMbti: (value: MBTI_NAME) => void;
        setCurrentPage: (value: "HOME" | "MISSION" | "SETTING") => void;
        setUserName: (value: string) => void;
        setIsLoggedin: (login: boolean) => void;
        setIsSetted: (setted: boolean) => void;
    },
    setUser: (user: any) => void;
}

export type MBTI_NAME = "INTJ" | "INTP" | "ENTJ" | "ENTP" | "INFJ" | "INFP" | "ENFJ" | "ENFP" | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ" | "ISTP" | "ISFP" | "ESTP" | "ESFP"

export const MBTIS = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP']