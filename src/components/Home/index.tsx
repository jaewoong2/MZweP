import { User } from "firebase/auth";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsCheck2Circle, BsCircle } from "react-icons/bs";
import { FaDice } from "react-icons/fa";

import { HiOutlineGift } from "react-icons/hi";
import styled from "styled-components";
import { Quests } from "../../assets/constant";
import { UserContextType } from "../../assets/types";
import { UserContext } from "../../context/Context";
import { auth, db } from "../../setting/firebase";
import Layout from "../Layout";

const Container = styled.div<{ nowIndex: number }>`
  overflow: auto;
  width: 100%;
  height: 100%;
  /* background-color: ${({ theme }) => theme.color.blue}; */
  background-color: #8b5dd9ce;

  .wrapper {
    width: 100%;
    height: 30%;
    padding: 10px;
    padding-top: 15px;
    position: relative;
    color: #ffff;
    /* background-color: ${({ theme }) => theme.color.blue}; */
    /* background-color: #8b5dd9a2; */

    .user-info {
      display: flex;
      width: 100%;
      /* flex-direction: column; */
      justify-content: flex-start;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 22px;
      .user {
        padding-bottom: 5px;
      }

      .user-displayName {
        padding-left: 5px;
        font-size: 24px;
        color: #fffffff8;
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
      border-radius: 20px;
      cursor: pointer;
    }

    .tooltip {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 600;

      .icon {
        color: #ffffff;
        margin-right: 5px;
      }
    }
  }

  .list-wrapper {
    width: 100%;
    height: 70%;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 1px 1px 8px #616161d5;

    .mission-lists {
      display: flex;
      flex-direction: column;
      justify-content: cetner;
      width: 100%;
      overflow: hidden;
      height: 100%;
      position: relative;

      .finished {
        color: red;
      }

      .mission {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 600;
        cursor: pointer;
        width: 90%;
        height: 11%;
        display: flex;
        align-items: center;
        margin-top: 10%;
        box-shadow: 1px 1px 7px #555555cf;
        margin-left: 5%;
        border-radius: 7px;

        padding-left: 20px;

        &:hover {
          transform: translateY(-10px);
          transition: transform 0.3s linear;
        }
        transition: transform 0.3s linear;
      }

      .shuffle {
        margin-left: 50%;
        transform: translateX(-50%);
        width: 20%;
        border-radius: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        padding-left: 0;
        font-size: 36px;
        background-color: #697bdfab;
        &:hover {
          transform: translateX(-50%);
        }
        transition: none;
      }

      // 라인
      /* &::after {
        top: 80px;
        content: "";
        width: 80%;
        left: 10%;
        position: absolute;
        height: 2px;
        background-color: #60606090;
        border-radius: 20px;
      } */

      .today {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 600;
        font-size: 28px;
        color: ${({ theme }) => theme.color.main};
        width: 100%;
        display: flex;
        padding-left: 30px;
        padding-top: 20px;
      }

      .mission-card {
        margin-top: 30%;
        /* background-color: #e9e7e7; */
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        height: 35%;
        flex-shrink: 0;
        border-radius: 12px;
        box-shadow: 1px 1px 8px #504f4fc6;
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 600;
        font-size: 20px;
        position: relative;
        transform: ${(props) => `translateX(-${props.nowIndex * 125}%)`};
        transition: transform 0.5s ease;

        .btn {
          top: 45%;
          cursor: pointer;
          font-size: 24px;
          position: absolute;
        }

        .left {
          left: -10%;
        }

        .right {
          right: -10%;
        }

        .title {
          display: flex;
          align-items: center;
          height: 60px;
          width: 100%;
          padding: 10px;
        }

        .mission {
          width: 100%;
          padding: 10px;
        }

        .icon {
          position: absolute;
          font-size: 30px;
          color: black;
          bottom: 20px;
          right: 10px;
          cursor: pointer;
        }

        .mission-point {
          position: absolute;
          bottom: 20px;
          width: 100%;
          display: flex;
          left: 40px;

          span {
            font-size: 24px;
            color: #1c4cd1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &::before {
              content: "";
              width: 90px;
              height: 100%;
              position: absolute;
              left: 50%;
              background-color: #b4b4b48b;
              -webkit-transform: translateX(-50%);
              -ms-transform: translateX(-50%);
              transform: translateX(-50%);
              padding: 7px;
              border-radius: 8px;
            }
          }
        }
      }
    }
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
    cursor: pointer;

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

  @media screen and (max-height: 850px) {
    .tooltip {
      display: none;
    }
    .point {
      display: flex;
      justify-content: center;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 20px;
      margin-top: 10px;
    }

    .point-info {
      display: flex;
      justify-content: center;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 600;
      font-size: 20px;
      margin-top: 5px;
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
    .mission-lists > .mission.shuffle {
      position: absolute;
      transform: translateX(0);
      width: 15%;
      border-radius: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      padding-left: 0;
      background-color: #697bdfab;
      &:hover {
        transform: translateX(0);
      }
      right: 20px;
      margin: 0px 0px 0px 0px;
      top: 10px;
    }
  }

  .wrapper > .user-info {
    padding-bottom: 0px;
    padding: 0 0 10px 10px;
  }
`;

const BarContainer = styled.div<{ persentage: number }>`
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 1px 1px 7px #1f1f1fac;
  margin-top: 5px;

  .bar {
    width: ${(props) => props.persentage + "%"};
    height: 40px;
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
      color: black;

      font-weight: 600;
      font-size: 13px;
    }
  }
`;

interface HomeProps {
  navigator: (url: string) => void;
}

const today = new Date().getMonth() + 1 + "/" + new Date().getDate();

const Home: React.FC<HomeProps> = ({ navigator }) => {
  const { user, setUser } = useContext(UserContext);
  const [quests, setQuests] = useState<number[]>([]);
  const [nowIndex, setNowIndex] = useState(0);

  const onClickDice = useCallback(() => {
    setQuests(() => {
      const nextQuests: number[] = [];
      while (nextQuests.length < 3) {
        const randomIndex = Math.floor(Math.random() * 10);
        if (
          !nextQuests.includes(randomIndex) &&
          !user?.finished?.includes(randomIndex)
        ) {
          nextQuests.push(randomIndex);
        }
      }
      return nextQuests;
    });
  }, [user.finished]);

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

  const onClickMission = useCallback(
    (index) => {
      db.collection(`users`)
        .doc(user?.uid)
        .collection("information")
        .onSnapshot((snapshot) => {
          snapshot?.docs[0]?.ref.update({
            finished: [...user?.finished, index],
          });
        });
    },
    [user]
  );

  useEffect(() => {
    quests.length === 0 && onClickDice();
  }, [onClickDice, quests]);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return (
    <Layout>
      <Container nowIndex={nowIndex}>
        <div className="wrapper">
          <div className="user-info">
            <div className="user">{user.mbti}</div>
            <div className="user-displayName">
              {user.displayName || "NickName"}님
            </div>
          </div>
          <span className="progress-info">미션진행도</span>
          <BarContainer
            persentage={
              Math.ceil(10 / user?.finished?.length) > 100
                ? 0
                : Math.ceil(10 / user?.finished?.length)
            }
          >
            <div className="bar">
              <span>
                {Math.ceil(10 / user?.finished?.length) > 100
                  ? 0
                  : Math.ceil(10 / user?.finished?.length)}
                %
              </span>
            </div>
          </BarContainer>
          <div className="point">포인트</div>
          <div className="point-info">{user.point}</div>
          <div className="box tooltip">
            <HiOutlineGift className="icon" />
            <span>포인트 상품 구매</span>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="mission-lists">
            <div className="today">오늘의 미션</div>
            {Quests[user.mbti].map(
              (text, index) =>
                quests.includes(index) && (
                  <div
                    onClick={onClickMission}
                    className={`mission ${
                      user.finished.includes(index) ? "finished" : ""
                    }`}
                  >
                    <span className="text">{text}</span>
                  </div>
                )
            )}
            <div onClick={onClickDice} className="mission shuffle">
              <FaDice></FaDice>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
