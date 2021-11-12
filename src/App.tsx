import React, { useEffect } from "react";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import { appAuth } from "./setting/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SingOut } from "./components/SingOut";

function App() {
  const [user, loading, error] = useAuthState(appAuth);

  useEffect(() => {
    console.log(user);
  }, [user, loading, error]);

  return (
    <>
      {user ? <Chat /> : <SignIn />}
      <SingOut></SingOut>
    </>
  );
}

export default App;
