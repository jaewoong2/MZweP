import { User } from "firebase/auth";
import React, { useCallback, useContext, useEffect } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import styled from "styled-components";
import { UserContextType } from "../../assets/types";
import { UserContext } from "../../context/Context";
import { auth, db } from "../../setting/firebase";
import Layout from "../Layout";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.blue};

  .wrapper {
    width: 100%;
    position: relative;
    height: 30%;
    color: #ffff;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.blue};

    .user-info {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: flex-end;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 32px;
      .user {
        padding-bottom: 5px;
      }

      .user-displayName {
        font-size: 28px;
        color: #ffdb0ff9;
        padding-bottom: 10px;
      }
      padding-left: 10px;
      padding-bottom: 20px;
    }

    .progress-info {
      margin-left: 10px;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 20px;
    }

    .box {
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      position: absolute;
      right: 10px;
      top: 10px;
      border-radius: 20px;
      cursor: pointer;
    }

    .tooltip {
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
      color: #d4d4d4;

      .icon {
        color: #8f8f8f;
        margin-right: 5px;
      }
    }
  }

  .list-wrapper {
    width: 100%;
    height: 70%;
    background-color: white;
    border-radius: 30px;
    box-shadow: 1px 1px 8px #616161d5;
  }

  .point {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 20px;
  }

  .point-info {
    display: flex;
    justify-content: center;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin-top: 10px;
    position: relative;

    &::before {
      content: "";
      width: 90px;
      height: 100%;
      position: absolute;
      left: 50%;
      background-color: #3d3d3d3b;
      transform: translateX(-50%);
      padding: 2px;
      border-radius: 20px;
    }
  }
`;

const BarContainer = styled.div<{ persentage: number }>`
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 1px 1px 7px #1f1f1fac;
  margin-top: 10px;

  .bar {
    width: ${(props) => props.persentage + "%"};
    height: 50px;
    border-radius: 30px;
    /* box-shadow: 1px 1px 2px #3a3a3aee; */
    position: relative;

    /* background-color: ${({ theme }) => theme.color.skyBlue}; */
    background-color: #ffdb0ff9;

    span {
      position: absolute;
      left: 105%;
      height: 100%;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.color.skyBlue};
      font-weight: 600;
      font-size: 13px;
    }
  }
`;

interface HomeProps {
  navigator: (url: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigator }) => {
  const { user, setUser } = useContext(UserContext);
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
          } else {
            setUser({
              photoURL,
              displayName,
              uid,
            });
          }
        });
    } else {
      navigator("/home");
    }
  }, [setUser, navigator]);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return (
    <Layout>
      <Container>
        <div className="wrapper">
          <div className="user-info">
            <div className="user">{user.mbti}</div>
            <div className="user-displayName">
              {user.displayName || "NickName"}님
            </div>
          </div>
          <span className="progress-info">오늘의 미션 수행</span>
          <BarContainer persentage={33}>
            <div className="bar">
              <span>33%</span>
            </div>
          </BarContainer>
          <div className="point">포인트</div>
          <div className="point-info">3299</div>
          <div className="box tooltip">
            <BsExclamationCircle className="icon" />
            <span>포인트 상품 구매</span>
          </div>
        </div>
        <div className="list-wrapper"></div>
      </Container>
    </Layout>
  );
};

export default Home;
