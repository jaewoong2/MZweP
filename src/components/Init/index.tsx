import React, { useCallback, useContext, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { MBTI_INFO } from "../../assets/constant";
import { MBTI_NAME } from "../../assets/types";
import { UserContext } from "../../context/Context";
import Layout from "../Layout";
import { auth, db } from "../../setting/firebase";
import firebase from "firebase/compat/app";
import { User } from "firebase/auth";
import * as InitStyled from "./Init.styes";

const mbtiSetting = [
  ["E", "I"],
  ["S", "N"],
  ["T", "F"],
  ["P", "J"],
];

interface InitProps {
  navigator: (url: string) => void;
}

const Init: React.FC<InitProps> = ({ navigator }) => {
  const { user, setUser } = useContext(UserContext);
  const { mbti, setMbti, isLoggedin, setIsSetted, setHashtag: setHash } = user;
  const [hashtag, setHashtag] = useState(MBTI_INFO[mbti].infomation[0]);

  const onClickHashTag = useCallback((value: string) => {
    setHashtag(value);
  }, []);

  const signIn = useCallback(async () => {
    const { uid } = auth?.currentUser as User;

    await db.collection(`users`).doc(uid).collection("information").add({
      mbti,
      hashtag,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }, [mbti, hashtag]);

  const onClickArrow = useCallback(
    (index: number) => {
      if (mbtiSetting[index][0] === mbti[index]) {
        const value = (mbti.slice(0, index) +
          mbtiSetting[index][1] +
          mbti.slice(index + 1, 4)) as MBTI_NAME;
        setMbti(value);
        setHashtag(MBTI_INFO[value].infomation[0]);
      } else {
        const value = (mbti.slice(0, index) +
          mbtiSetting[index][0] +
          mbti.slice(index + 1, 4)) as MBTI_NAME;
        setMbti(value);
        setHashtag(MBTI_INFO[value].infomation[0]);
      }
    },
    [mbti, setMbti]
  );

  const onClickSetting = useCallback(() => {
    if (mbti && hashtag && isLoggedin) {
      setIsSetted(true);
      setHash(hashtag);
      navigator("home");
      signIn();
    }
  }, [navigator, setIsSetted, isLoggedin, mbti, hashtag, setHash, signIn]);

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
            </div>
          ))}
        </InitStyled.Container>
        <InitStyled.Information>
          <div className="title"></div>
          <div className="description">
            {MBTI_INFO[mbti].infomation.map((info) => (
              <span
                className={info === hashtag ? "selected" : ""}
                onClick={() => onClickHashTag(info)}
              >
                #{info}
              </span>
            ))}
          </div>
          <div className="line-click">Pick !</div>
        </InitStyled.Information>
        <div className="nickname-form">
          <div className="nickname-hash-tag">
            <div className="tag-wrapper">
              <span className="tag">#</span>
              {hashtag}
            </div>
          </div>
          {/* <div className="nickname-input-wrapper">
            <span className="prefix">Google 닉네임님</span>
          </div> */}
        </div>
        <div className="tooltip">
          <BsExclamationCircle className="icon" />
          <span>미션을 수행하고 Point를 받아 가요.</span>
        </div>
        <div className="tooltip2">
          <BsExclamationCircle className="icon" />
          <span>Point는 상품으로 바꿀 수 있어요.</span>
        </div>
        <div onClick={onClickSetting} className="set">
          설정
        </div>
      </InitStyled.Wrapper>
    </Layout>
  );
};

export default Init;
