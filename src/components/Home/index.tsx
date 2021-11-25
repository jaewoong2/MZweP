import React from "react";
import styled from "styled-components";
import Layout from "../Layout";

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #695b5b;
  color: #d39e50;
  padding: 10px;

  .user-info {
    padding-left: 10px;
    padding-bottom: 20px;
    div {
      padding-bottom: 10px;

      padding-left: 10px;
      position: relative;

      &::after {
        content: "";
        width: 12px;
        height: 12px;
        position: absolute;
        left: -10px;
        top: 1.5px;
        border-radius: 50%;
        border: 1px solid gray;
      }
    }
  }

  .progress-info {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 20px;
  }
`;

const BarContainer = styled.div<{ persentage: number }>`
  width: 100%;
  height: 50px;
  background-color: #666666e6;
  border-radius: 30px;
  box-shadow: 1px 1px 7px #1f1f1fac;
  margin-top: 10px;

  .bar {
    width: ${(props) => props.persentage + "%"};
    height: 50px;
    border-radius: 30px;
    box-shadow: 1px 1px 2px #3a3a3aee;
    position: relative;

    background-color: ${({ theme }) => theme.color.skyBlue};

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

const Home: React.FC = () => {
  return (
    <Layout>
      <Container>
        <div className="user-info">
          <div>ENFP</div>
          <div>유저네임</div>
        </div>
        <span className="progress-info">미션 진행도</span>
        <BarContainer persentage={33}>
          <div className="bar">
            <span>33%</span>
          </div>
        </BarContainer>
        <div>포인트</div>
        <div>3299</div>
      </Container>
    </Layout>
  );
};

export default Home;
