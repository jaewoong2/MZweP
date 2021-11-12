import React, { FormEvent, useCallback, useState } from "react";
import { auth, db } from "../setting/firebase";
import firebase from "firebase/compat/app";
import { User } from "firebase/auth";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const { uid, photoURL } = auth?.currentUser as User;

      await db.collection("messages").add({
        text: message,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    },
    [message]
  );

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessage;
