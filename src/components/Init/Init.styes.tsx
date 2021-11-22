import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .nickname-form {
    display: flex;
    width: 100%;
    height: 80px;
    padding-top: 20px;
    padding-left: 10px;
    justify-content: space-between;
    flex-direction: column;
    font-family: "Noto Sans KR", sans-serif;
    margin-top: 10px;

    .nickname-hash-tag {
      width: 90%;
      font-weight: 600;
      font-size: 36px;
      display: flex;

      position: relative;
      margin-bottom: 10px;

      .tag-wrapper {
        display: flex;
        align-items: center;
        .tag {
          color: #8b5dd9b3;

          margin-right: 10px;
          font-size: 48px;
        }
      }
    }

    .nickname-input-wrapper {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      height: 32px;

      .nickname-input {
        outline: none;
        border: none;
        width: 100%;
        font-weight: 600;
        font-size: 36px;
      }

      .prefix {
        padding-right: 10%;
        font-weight: 600;
        font-size: 36px;
        cursor: pointer;
        font-family: "Shippori Antique", sans-serif;
      }
    }
  }

  .suggest {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bolder;
    font-size: 36px;
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 40px;

    span {
      color: ${(props) => props.theme.color.main};
    }
  }

  .set {
    width: 90%;
    height: 50px;
    background-color: ${(props) => props.theme.color.main};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 18px;
    box-shadow: 1px 1px 8px #333333ac;
    cursor: pointer;
    font-weight: 700;
    font-family: "Noto Sans KR", sans-serif;
    align-items: center;
    position: absolute;
    left: 5%;
    bottom: 50px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: "Shippori Antique", sans-serif;
  cursor: pointer;
  margin-top: 50px;
  .mbti {
    border-radius: 50%;
    width: 78px;
    height: 78px;
    margin-right: 20px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: bolder;
    align-items: center;
    font-size: 65px;

    color: ${(props) => props.theme.color.main};
    text-shadow: 1px 1px 7px #3a3a3a6c;
    position: relative;

    /* &::after {
      content: " ";
      position: absolute;
      bottom: -5px;
      left: 10%;
      width: 80%;
      height: 3px;
      border-radius: 16px;
      background-color: ${(props) => props.theme.color.main};
    } */
    /* border: 3px solid ${(props) => props.theme.color.skyBlue}; */

    &:first-child {
      color: ${(props) => props.theme.color.pink};
      /* border: 3px solid ${(props) => props.theme.color.main}; */
      /* &::after {
        content: " ";
        position: absolute;
        bottom: -5px;
        left: 10%;
        width: 80%;
        height: 3px;
        border-radius: 16px;
        background-color: ${(props) => props.theme.color.pink};
      } */
    }
    &:nth-child(2) {
      /* border: 3px solid ${(props) => props.theme.color.mint}; */
      color: ${(props) => props.theme.color.skyBlue};
      /* &::after {
        content: " ";
        position: absolute;
        bottom: -5px;
        left: 10%;
        width: 80%;
        height: 3px;
        border-radius: 16px;
        background-color: ${(props) => props.theme.color.skyBlue};
      } */
    }
    &:nth-child(3) {
      /* border: 3px solid ${(props) => props.theme.color.pink}; */
      color: ${(props) => props.theme.color.mint};
      /* &::after {
        content: " ";
        position: absolute;
        bottom: -5px;
        left: 10%;
        width: 80%;
        height: 3px;
        border-radius: 16px;
        background-color: ${(props) => props.theme.color.mint};
      } */
    }

    .icon {
      cursor: pointer;
      font-size: 20px;
      color: black;
    }
  }
`;

export const Information = styled.div`
  width: 100%;
  max-height: 500px;
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
    /* min-height: 270px; */
    text-align: right;

    span {
      cursor: pointer;
      color: white;
      background-color: #7a7a7a9b;
      padding: 0px 3px 0px 3px;
      border-radius: 7px;
      margin-right: 5px;
      word-break: keep-all;
      white-space: nowrap;
    }

    .selected {
      background-color: #8b5dd9b3;
    }
  }
  .line-click {
    width: 95%;
    display: flex;
    font-weight: 600;
    font-size: 13px;
    font-family: "Noto Sans KR", sans-serif;
    justify-content: flex-end;
    align-items: center;
    text-shadow: 1px 1px 2px #7a7a7ac7;
    position: relative;

    &::after {
      left: 10px;
      top: 50%;
      position: absolute;
      content: "";
      width: 88%;
      border-radius: 16px;
      height: 2px;
      background-color: #9796967d;
    }
  }
`;
