import React, { useCallback } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { auth } from "../setting/firebase";

const SignIn = () => {
  const singInWithGoogle = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }, []);

  return (
    <div>
      <button onClick={singInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
