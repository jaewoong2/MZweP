import styled from "styled-components";

type chatDivType = {
  sent: boolean;
};

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
  border: 1.2px solid #444444ed;
  border-radius: 8px;

  .message-form-container {
    width: 100%;
    display: flex;
    margin-top: 20px;

    form {
      display: flex;
      width: 100%;
    }

    input {
      border: none;
      outline: none;
      background-color: #83da7b;
      border-radius: 8px;
      padding: 10px;
      color: #272727;
      width: 90%;
      margin-right: 10px;
    }

    button {
      border: none;
      outline: none;
      border-radius: 8px;
      padding: 10px;
      width: 100px;
      height: 40px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800px;
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6b8ace;
    border-radius: 8px;
    background-clip: padding-box;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 8px;
  }
`;

const Div = styled.div<chatDivType>`
  display: flex;
  width: 100%;
  justify-content: ${(props) =>
    props.sent === true ? "flex-end" : "flex-start"};
  align-items: center;

  padding: 10px;

  .image-container {
    width: 50px;
    height: 50px;
    margin: ${(props) =>
      props.sent === true ? "0px 0px 0px 10px" : "0px 10px 0px 0px"};
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  p {
    border-radius: 7px;
    background-color: ${(props) => (props.sent ? "#7ec977" : "#5324")};
    display: flex;
    align-items: center;
    padding: 10px;
    max-width: 70%;
  }
`;

export { Div, MessageContainer, ChatContainer };
