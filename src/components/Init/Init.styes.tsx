import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "Shippori Antique", sans-serif;

  .mbti {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: bolder;
    align-items: center;
    font-size: 48px;
    color: ${(props) => props.theme.color.skyBlue};

    &:first-child {
      color: ${(props) => props.theme.color.pink};
    }
    &:nth-child(2) {
      color: ${(props) => props.theme.color.main};
    }
    &:nth-child(3) {
      color: ${(props) => props.theme.color.mint};
    }

    .icon {
      cursor: pointer;
      font-size: 20px;
      color: black;
    }
  }
`;

export const Information = styled.div`
  margin-top: 100px;

  width: 100%;
  max-height: 500px;
  background-color: #c8eba8c1;
  border-radius: 8px;

  .title {
    padding: 10px 10px 10px 20px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 28px;
    font-weight: 600;
  }

  .description {
    padding: 10px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 15px;
    line-height: 1.7em;

    span {
      color: white;
      background-color: #7a7a7a9b;
      padding: 0px 3px 0px 3px;
      border-radius: 7px;
      margin-right: 5px;
    }
  }
`;
