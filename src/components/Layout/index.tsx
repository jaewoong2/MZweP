import React from "react";
import * as Styled from "./Layout.styles";
import { GrHomeOption } from "react-icons/gr";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineStar, AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const Layout: React.FC = ({ children }) => {
  return (
    <Styled.Main>
      <Styled.Header>
        <Link className="link" to={"/"}>
          <div className="spans">
            Wanna <span className="B">B</span>
            <span className="T">t</span>
            <span className="I">i</span>
          </div>
        </Link>
        <RiMenu3Fill className="icon" />
      </Styled.Header>
      <Styled.Container>{children}</Styled.Container>
      <Styled.Nav>
        <Styled.Lists>
          <li>
            <Link className="link" to={"/mission"}>
              <AiOutlineStar className="icon"></AiOutlineStar>
              <span>미션</span>
            </Link>
          </li>
          <li>
            <Link className="link" to={"/home"}>
              <GrHomeOption className="icon"></GrHomeOption>
              <span>홈</span>
            </Link>
          </li>
          <li>
            <Link className="link" to={"/setting"}>
              <AiFillSetting className="icon"></AiFillSetting>
              <span>설정</span>
            </Link>
          </li>
        </Styled.Lists>
      </Styled.Nav>
      <Styled.Footer>2021- @MZ WE` Project</Styled.Footer>
    </Styled.Main>
  );
};

export default Layout;
