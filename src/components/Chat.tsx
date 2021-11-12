import React, { useEffect, useState } from "react";
import { auth, db } from "../setting/firebase";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      {messages.map(({ id, text, photoURL, uid }) => (
        <div>
          <div
            key={id}
            className={`msg ${
              uid === auth?.currentUser?.uid ? "sent" : "received"
            }`}
          >
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        </div>
      ))}
      <SendMessage />
    </div>
  );
};

export default Chat;
