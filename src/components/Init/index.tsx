import React, { useCallback, useContext, useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaRegDotCircle } from "react-icons/fa";
import { RiArrowUpFill } from "react-icons/ri";
import { MBTI_INFO } from "../../assets/constant";
import { MBTI_NAME } from "../../assets/types";
import { UserContext } from "../../context/Context";
import Layout from "../Layout";
import * as InitStyled from "./Init.styes";

const mbtiSetting = [
  ["E", "I"],
  ["S", "N"],
  ["T", "F"],
  ["P", "J"],
];

const Init = () => {
  const { mbti, setMbti } = useContext(UserContext);

  useEffect(() => {
    console.log(mbti);
  }, [mbti]);

  const onClickArrow = useCallback(
    (index: number) => {
      if (mbtiSetting[index][0] === mbti[index]) {
        const value = (mbti.slice(0, index) +
          mbtiSetting[index][1] +
          mbti.slice(index + 1, 4)) as MBTI_NAME;
        setMbti(value);
      } else {
        const value = (mbti.slice(0, index) +
          mbtiSetting[index][0] +
          mbti.slice(index + 1, 4)) as MBTI_NAME;
        setMbti(value);
      }
    },
    [mbti, setMbti]
  );

  return (
    <Layout>
      <InitStyled.Wrapper>
        <div className="suggest">
          되고 싶은 <span>MBTI</span>를 <br /> 골라 주세요.{" "}
        </div>
        <InitStyled.Container>
          {mbti.split("").map((value, index) => (
            <div onClick={() => onClickArrow(index)} className="mbti">
              <span>{value}</span>
              {/* <FaRegDotCircle
                onClick={() => onClickArrow(index)}
                className="icon"
              /> */}
            </div>
          ))}
        </InitStyled.Container>
        <InitStyled.Information>
          <div className="title">{/* {mbti}: {MBTI_INFO[mbti].title} */}</div>
          <div className="description">
            {MBTI_INFO[mbti].infomation.map((info) => (
              <span>#{info}</span>
            ))}
          </div>
        </InitStyled.Information>
      </InitStyled.Wrapper>
    </Layout>
  );
};

export default Init;
