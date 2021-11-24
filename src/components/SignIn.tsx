import React, { useCallback } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { auth } from "../setting/firebase";
import { RouterComponent } from "../assets/types";

interface SignInProps {
  navigate: (URL: string) => void;
}

const SignIn: React.FC<SignInProps> = ({ navigate }) => {
  const singInWithGoogle = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    navigate("/chatRoom");
  }, [navigate]);

  return (
    <div>
      <button onClick={singInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
