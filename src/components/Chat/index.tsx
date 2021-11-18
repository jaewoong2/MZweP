import React, { useEffect, useState } from "react";
import { RouterComponent } from "../../assets/types";
import { auth, db } from "../../setting/firebase";
import SendMessage from "../SendMessage";
import { Div, MessageContainer, ChatContainer } from "./chatStyles";

interface ChatProps extends RouterComponent {}

const Chat: React.FC<ChatProps> = () => {
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
    <ChatContainer>
      <MessageContainer>
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            {uid === auth?.currentUser?.uid ? (
              <Div key={id} sent={true}>
                <p>{text}</p>
                <div className="image-container">
                  <img
                    src={photoURL ? photoURL : "../../assets/images/user.png"}
                    alt=""
                  />
                </div>
              </Div>
            ) : (
              <Div key={id} sent={false}>
                <div className="image-container">
                  <img
                    src={photoURL ? photoURL : "../../assets/images/user.png"}
                    alt=""
                  />
                </div>
                <p>{text}</p>
              </Div>
            )}
          </div>
        ))}
      </MessageContainer>
      <SendMessage />
    </ChatContainer>
  );
};

export default Chat;
