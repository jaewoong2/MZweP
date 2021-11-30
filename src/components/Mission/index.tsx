import React, { useContext } from "react";
import styled from "styled-components";
import { Quests } from "../../assets/constant";
import { UserContext } from "../../context/Context";
import Layout from "../Layout";

const MissionDiv = styled.div`
  width: 100%;
  height: 30px;
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-family: "Noto Sans Kr";
  span {
    color: ${({ theme }) => theme.color.main};
    margin-right: 10px;
  }
`;

interface MissionProps {
  navigator: (url: string) => void;
}
const Mission: React.FC<MissionProps> = ({ navigator }) => {
  const { user } = useContext(UserContext);

  return (
    <Layout navigator={navigator}>
      {user.finished.map((v, i) => (
        <MissionDiv>
          <span>{i + 1}- </span>
          {Quests[user.mbti][v]} + 10
        </MissionDiv>
      ))}
    </Layout>
  );
};

export default Mission;
