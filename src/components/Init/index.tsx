import React, { useCallback, useContext, useEffect, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { MBTI_INFO } from "../../assets/constant";
import { MBTI_NAME, UserContextType } from "../../assets/types";
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
  const [isinit, setIsinit] = useState(true);
  const { mbti, setMbti, hashtag, setHashtag } = user;

  // useEffect(() => {
  //   if (auth.currentUser) {
  //     const { uid, photoURL, displayName } = auth?.currentUser as User;
  //     db.collection(`users`)
  //       .doc(uid)
  //       .collection("information")
  //       .onSnapshot((snapshot) => {
  //         const data = snapshot?.docs[0]?.data();
  //         if (data) {
  //           const { mbti, hashtag } = data as UserContextType["user"];
  //           setUser({
  //             mbti,
  //             hashtag,
  //             uid,
  //             displayName,
  //             photoURL,
  //           });
  //         } else {
  //           setUser({
  //             photoURL,
  //             displayName,
  //             uid,
  //           });
  //         }
  //       });
  //     navigator("/home");
  //   }
  // }, [navigator, setUser, auth]);

  const onClickHashTag = useCallback(
    (value: string) => {
      setHashtag(value);
    },
    [setHashtag]
  );

  const signIn = useCallback(async () => {
    const { uid } = auth?.currentUser as User;
    const dataRef = (await db.collection(`users`).doc(uid).get()).ref;
    const data = (await db.collection(`users`).doc(uid).get()).data();
    if (data) {
      setIsinit(false);
      dataRef.set({
        ...data,
        mbti,
        hashtag,
        finished: [],
      });
    }
    //       .onSnapshot((doc) => {
    //   const data = doc.docs[0].data();
    //   if (data) {
    //     setIsinit(false);
    //     doc.docs[0].ref.update({
    //       uid,
    //       point: 0,
    //       finished: [],
    //       mbti,
    //       hashtag,
    //       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //     });
    //   }
    // });

    if (isinit) {
      await db.collection(`users`).doc(uid).set({
        uid,
        point: 0,
        finished: [],
        mbti,
        hashtag,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  }, [mbti, hashtag, isinit]);

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
    [mbti, setMbti, setHashtag]
  );

  const onClickSetting = useCallback(() => {
    if (mbti && hashtag && user?.uid) {
      setHashtag(hashtag);
      navigator("home");
      signIn();
    }
  }, [navigator, user, mbti, hashtag, setHashtag, signIn]);

  return (
    <Layout navigator={navigator}>
      <InitStyled.Wrapper>
        <div className="suggest">
          ?????? ?????? <span>MBTI</span>??? <br /> ?????? ?????????.{" "}
        </div>
        <div className="image-container">
          <img alt="photoUrl" className="photoURL" src={user?.photoURL} />
        </div>
        <InitStyled.Container>
          {mbti?.split("").map((value, index) => (
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
            <span className="prefix">Google ????????????</span>
          </div> */}
        </div>
        <div className="tooltip">
          <BsExclamationCircle className="icon" />
          <span>????????? ???????????? Point??? ?????? ??????.</span>
        </div>
        <div className="tooltip2">
          <BsExclamationCircle className="icon" />
          <span>Point??? ???????????? ?????? ??? ?????????.</span>
        </div>
        <div onClick={onClickSetting} className="set">
          ??????
        </div>
      </InitStyled.Wrapper>
    </Layout>
  );
};

export default Init;
