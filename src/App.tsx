import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import { appAuth } from "./setting/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SingOut } from "./components/SingOut";
import styled from "styled-components";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import ChatRooms from "./components/ChatRoom";
import Layout from "./components/Layout";
import Init from "./components/Init";

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #bdbdbded;
`;

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/init" element={<Init />} />
        <Route path="/" element={<Init />} />
        <Route path="/setting" element={<Init />} />
        <Route path="/mission" element={<Init />} />
      </Routes>
    </Main>
  );
}

export default App;
