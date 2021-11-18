import styled from "styled-components";

export const ChatRoomContainer = styled.div`
  width: 500px;
  height: 800px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  div {
    width: 25%;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #80ad80;
    color: white;
    cursor: pointer;
    box-shadow: 1px 1px 7px #3b3b3b81;
    margin-left: 20px;

    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    &:active {
      transform: scale(0.9);
      background-color: #b86f11ee;
      transition: transform 0.3s, background-color 0.3s;
    }
    transition: transform 0.3s, background-color 0.3s;
  }
`;
