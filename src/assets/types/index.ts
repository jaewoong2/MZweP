import { RouteProps } from "react-router-dom";

export interface RouterComponent extends RouteProps, JSX.Element {
    type: string;
    props: {};
    key: string;
}

type userType = {
    displayName?: string;
    uid?: string;
    photoURL?: string;
    mbti: MBTI_NAME;
    hashtag: string;
    currentPage: "HOME" | "MISSION" | "SETTING";
    setHashtag: (value: string) => void;
    setMbti: (value: MBTI_NAME) => void;
    setCurrentPage: (value: "HOME" | "MISSION" | "SETTING") => void;
}

export interface UserContextType {
    user: userType,
    setUser: (user: userType | any) => void;
}

export type MBTI_NAME = "INTJ" | "INTP" | "ENTJ" | "ENTP" | "INFJ" | "INFP" | "ENFJ" | "ENFP" | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ" | "ISTP" | "ISFP" | "ESTP" | "ESFP"

export const MBTIS = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP']