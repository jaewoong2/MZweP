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
import Intro from "./components/Intro";
import Home from "./components/Home";
import Mission from "./components/Mission";

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #bdbdbded;
`;

function App() {
  const navigator = useNavigate();
  const appNavigator = useCallback(
    (url: string) => navigator(url),
    [navigator]
  );

  return (
    <Main>
      <Routes>
        <Route path="/init" element={<Init navigator={appNavigator} />} />
        <Route path="/" element={<Intro navigator={appNavigator} />} />
        <Route path="/home" element={<Home navigator={appNavigator} />} />
        <Route path="/setting" element={<Init navigator={appNavigator} />} />
        <Route path="/mission" element={<Mission navigator={appNavigator} />} />
      </Routes>
    </Main>
  );
}

export default App;
