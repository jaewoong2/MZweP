import { RouteProps } from "react-router-dom";

export interface RouterComponent extends RouteProps, JSX.Element {
    type: string;
    props: {};
    key: string;
}

export interface UserContextType {
    userName: string;
    mbti: MBTI_NAME;
    currentPage: "HOME" | "MISSION" | "SETTING";
    setMbti: (value: MBTI_NAME) => void;
    setCurrentPage: (value: "HOME" | "MISSION" | "SETTING") => void;
    setUserName: (value: string) => void;
}

export type MBTI_NAME = "INTJ" | "INTP" | "ENTJ" | "ENTP" | "INFJ" | "INFP" | "ENFJ" | "ENFP" | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ" | "ISTP" | "ISFP" | "ESTP" | "ESFP"

export const MBTIS = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP']