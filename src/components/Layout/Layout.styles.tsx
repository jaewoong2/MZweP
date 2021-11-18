import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  /* height: 100%; */
  position: relative;

  /* 조정 */
  border-radius: 8px;
  box-shadow: 1px 1px 10px #525252ae;
  background-color: #fff;
  max-width: 435px;
  max-height: 960px;

  * {
    /* font-family: "Architects Daughter", cursive; */
    /* font-family: "Dancing Script", cursive; */
  }
`;

const Header = styled.header`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 0 20px 0 20px;

  box-shadow: 0px -1px 4px #525252ce;
  border-radius: 7px;

  .icon {
    cursor: pointer;
    font-size: 24px;
  }

  &:hover {
    .icon,
    span,
    rect {
      stroke: ${(props) => props.theme.color.main};
      color: ${(props) => props.theme.color.main};
      transition: all 0.25s;
    }
  }
  transition: all 0.25s;

  .spans {
    color: ${(props) => props.theme.color.main};

    .B {
      color: #e59a97;
    }

    .T {
      color: #9fd8af;
    }

    .I {
      color: #769cd1;
    }
    font-weight: bolder;
    font-family: "Lobster", cursive;
  }
`;

const Nav = styled.nav`
  width: 100%;
`;

const Container = styled.div`
  min-height: 700px;
  padding: 10px 20px 0 20px;
  font-family: "Noto Sans KR", sans-serif;
`;

const Footer = styled.footer`
  display: none;
`;

const Lists = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;

  box-shadow: 0px 1px 4px #525252ce;
  border-radius: 7px;

  li {
    width: 34%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* 조정 */
    min-height: 60px;

    cursor: pointer;
    .icon {
      font-size: 24px;
    }

    span {
      font-size: 13px;
      margin-top: 5px;
      font-family: "Noto Sans KR", sans-serif;
      font-weight: 300;
    }

    &:hover {
      .icon,
      span,
      rect {
        stroke: ${(props) => props.theme.color.main};
        color: ${(props) => props.theme.color.main};
        transition: all 0.25s;
      }
    }
    transition: all 0.25s;
  }
`;

export { Main, Footer, Nav, Container, Lists, Header };
