import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { RiArrowUpFill } from "react-icons/ri";
import Layout from "../Layout";
import * as InitStyled from "./Init.styes";

const estp = [
  "사실적이고 관대하다",
  "개방적이다",
  "사람이나 사물에 대한 선입견이 별로 없다",
  "강한 현실 감각이 있다",
  "타협책을 모색하고 문제를 해결하는 능력이 뛰어나다",
  "센스 있고 유머러스하다",
  "어디서든 적응을 잘 한다",
  "친구와 어울리기를 좋아한다",
  "긴 설명을 싫어한다",
  "삶의 모든 것을 즐기는 유형이다",
  "순발력이 뛰어나다",
  "많은 사실들을 쉽게 기억한다",
  "예술적인 멋과 판단력을 갖고 있다",
  "연장이나 재료들을 다루는 데 능숙하다",
  "논리, 분석적으로 일을 처리한다",
  "추상적인 개념에 대해 흥미가 없다",
  "현실적이고 실용적인 면에 분석적이다",
];

const Init = () => {
  return (
    <Layout>
      <InitStyled.Container>
        <div className="mbti">
          <span>E</span>
          <AiFillCaretDown className="icon"></AiFillCaretDown>
        </div>
        <div className="mbti">
          <span>S</span>
          <AiFillCaretDown className="icon"></AiFillCaretDown>
        </div>
        <div className="mbti">
          <span>T</span>
          <AiFillCaretDown className="icon"></AiFillCaretDown>
        </div>
        <div className="mbti">
          <span>P</span>
          <AiFillCaretDown className="icon"></AiFillCaretDown>
        </div>
      </InitStyled.Container>
      <InitStyled.Information>
        <div className="title">ESTP</div>
        <div className="description">
          {estp.map((description) => (
            <span>#{description}</span>
          ))}
        </div>
      </InitStyled.Information>
    </Layout>
  );
};

export default Init;
