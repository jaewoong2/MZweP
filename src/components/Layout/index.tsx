import React from "react";
import * as Styled from "./Layout.styles";
import { GrHomeOption } from "react-icons/gr";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineStar, AiFillSetting } from "react-icons/ai";

const Layout: React.FC = ({ children }) => {
  return (
    <Styled.Main>
      <Styled.Header>
        <div className="spans">
          Wanna <span className="B">B</span>
          <span className="T">t</span>
          <span className="I">i</span>
        </div>
        <RiMenu3Fill className="icon" />
      </Styled.Header>
      <Styled.Container>{children}</Styled.Container>
      <Styled.Nav>
        <Styled.Lists>
          <li>
            <AiOutlineStar className="icon"></AiOutlineStar>
            <span>미션</span>
          </li>
          <li>
            <GrHomeOption className="icon"></GrHomeOption>
            <span>홈</span>
          </li>
          <li>
            <AiFillSetting className="icon"></AiFillSetting>
            <span>설정</span>
          </li>
        </Styled.Lists>
      </Styled.Nav>
      <Styled.Footer>2021- @MZ WE` Project</Styled.Footer>
    </Styled.Main>
  );
};

export default Layout;
