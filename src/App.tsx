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
import Congratulate from "./components/Congratulate";

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
        <Route path="/" element={<Init navigator={appNavigator} />} />
        <Route
          path="/congratulate"
          element={<Congratulate navigator={appNavigator} />}
        />
        <Route path="/setting" element={<Init navigator={appNavigator} />} />
        <Route path="/mission" element={<Init navigator={appNavigator} />} />
      </Routes>
    </Main>
  );
}

export default App;
