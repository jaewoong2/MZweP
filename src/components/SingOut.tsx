import React from "react";
import { auth } from "../setting/firebase";

export const SingOut = () => {
  return (
    <div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};
