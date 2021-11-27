import { User } from "firebase/auth";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsCheck2Circle, BsCircle } from "react-icons/bs";
import { HiOutlineGift } from "react-icons/hi";
import styled from "styled-components";
import { UserContextType } from "../../assets/types";
import { UserContext } from "../../context/Context";
import { auth, db } from "../../setting/firebase";
import Layout from "../Layout";

const Container = styled.div<{ nowIndex: number }>`
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
      font-size: 22px;
      .user {
        padding-bottom: 5px;
      }

      .user-displayName {
        font-size: 24px;
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
    height: 100%;
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 1px 1px 8px #616161d5;

    .mission-lists {
      display: flex;
      width: 100%;
      overflow: hidden;
      height: 100%;
      position: relative;

      &::after {
        top: 80px;
        content: "";
        width: 80%;
        left: 10%;
        position: absolute;
        height: 2px;
        background-color: #60606090;
        border-radius: 20px;
      }

      .today {
        position: absolute;
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 600;
        font-size: 28px;
        top: 40px;
        color: ${({ theme }) => theme.color.main};
        left: 10%;
      }

      .mission-card {
        background-color: #e27e7e;
        margin-top: 30%;
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
          color: white;
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
    margin-top: 40px;
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

  @media screen and (max-height: 850px) {
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
      color: ${({ theme }) => theme.color.skyBlue};
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
  const missionLists = [1, 2, 3, 4, 5];
  const [nowIndex, setNowIndex] = useState(0);

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

  const onClickBtn = useCallback(
    ({ isLeft }: { isLeft: boolean }) => {
      if (isLeft) {
        if (nowIndex <= 0) {
          setNowIndex(missionLists.length - 1);
        } else {
          setNowIndex((prev) => prev - 1);
        }
      } else {
        if (nowIndex >= missionLists.length - 1) {
          setNowIndex(0);
        } else {
          setNowIndex((prev) => prev + 1);
        }
      }
    },
    [missionLists, nowIndex]
  );

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
          <span className="progress-info">오늘의 미션 수행</span>
          <BarContainer persentage={33}>
            <div className="bar">
              <span>33%</span>
            </div>
          </BarContainer>
          <div className="point">포인트</div>
          <div className="point-info">3299</div>
          <div className="box tooltip">
            <HiOutlineGift className="icon" />
            <span>포인트 상품 구매</span>
          </div>
        </div>
        <div className="list-wrapper">
          <div className="mission-lists">
            <div className="today">{today} 미션 리스트</div>
            {missionLists.map((v, index) => (
              <div className={`mission-card card-${index}`}>
                <AiOutlineLeft
                  onClick={() => onClickBtn({ isLeft: true })}
                  className="left btn"
                />
                <div className="title">{user.mbti} 로 가는길</div>
                <div className="mission">Mission1</div>
                <div className="mission-point">
                  <span>900점</span>
                </div>
                <AiOutlineRight
                  onClick={() => onClickBtn({ isLeft: false })}
                  className="right btn"
                />
                {/* <BsCircle className="icon"/ > */}
                <BsCheck2Circle className="icon" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
