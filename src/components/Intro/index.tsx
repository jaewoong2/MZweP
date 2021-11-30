import React, { useCallback, useContext, useEffect, useState } from "react";
import Layout from "../Layout";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { auth, db } from "../../setting/firebase";
import { FcGoogle } from "react-icons/fc";
import { Container, Headers, Login } from "./Intro.styles";
import { UserContext } from "../../context/Context";
import { UserContextType } from "../../assets/types";
import { User } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
interface CongratulateProps {
  navigator: (url: string) => void;
}
const Intro: React.FC<CongratulateProps> = ({ navigator }) => {
  const { setUser } = useContext(UserContext);
  const [hidden, setHidden] = useState(true);

  const checkLogin = useCallback(() => {
    if (auth.currentUser) {
      const { uid, photoURL, displayName } = auth?.currentUser as User;
      db.collection(`users`)
        .doc(uid)
        .collection("information")
        .onSnapshot((snapshot) => {
          const data = snapshot?.docs[0]?.data();
          if (data) {
            const { mbti, hashtag } = data as UserContextType["user"];
            setUser({
              mbti,
              hashtag,
              uid,
              displayName,
              photoURL,
            });
            navigator("/home");
          } else {
            setUser({
              photoURL,
              displayName,
              uid,
            });
            navigator("/init");
          }
        });
    } else {
      navigator("/");
    }
  }, [navigator, setUser]);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
      checkLogin();
    }, 2000);
  }, [navigator, checkLogin]);

  const singInWithGoogle = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(async (result) => {
      if (result.user) {
        const { uid, displayName, photoURL } = result.user;
        const data = (await db.collection(`users`).doc(uid).get()).data();
        if (data) {
          const { mbti, hashtag } = data as UserContextType["user"];
          setUser({
            mbti,
            hashtag,
            uid,
            displayName,
            photoURL,
          });
          navigator("/home");
        } else {
          setUser({
            photoURL,
            displayName,
            uid,
          });
          navigator("/init");
        }
      }
    });
  }, [navigator, setUser]);

  return (
    <Layout navigator={navigator}>
      <Container>
        <Headers className={hidden ? "hidden" : ""}>
          <div className="spans">
            Wanna <span className="B">B</span>
            <span className="T">t</span>
            <span className="I">i</span>
          </div>
          새로운 나를 만나다
        </Headers>
        <Login onClick={singInWithGoogle} className={hidden ? "hidden" : ""}>
          <FaGoogle className="icon" />
        </Login>
      </Container>
    </Layout>
  );
};

export default Intro;
