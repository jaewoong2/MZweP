import styled, { keyframes } from "styled-components";

const opacityAnimation = keyframes`
    0% {
        opacity: 0;
    }

     100% {
        opacity: 1;
     }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  opacity: 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 900;
  font-style: italic;
  color: #272727;
  text-shadow: 1px 1px 5px #5e5d5dec;
  font-size: 20px;
  padding-bottom: 100px;
  animation: ${opacityAnimation} 2s linear;
  opacity: 1;
`;

export const Headers = styled.header`
  display: flex;
  align-items: center;
  font-size: 50px;
  font-style: normal;
  text-shadow: 1px 1px 5px #5e5d5dec;

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
