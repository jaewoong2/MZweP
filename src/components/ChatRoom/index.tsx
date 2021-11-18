import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MBTIS, RouterComponent } from "../../assets/types";
import { ChatRoomContainer } from "./chatRoomStyles";

interface ChatRoomsProps extends RouterComponent {
  navigate: (to: string) => void;
  settingMbti: (mbti: string) => void;
}

const ChatRooms: React.FC<ChatRoomsProps> = ({ navigate, settingMbti }) => {
  const onCiickMBTI = useCallback(
    (mbti: string) => {
      navigate("/chat/" + mbti);
    },
    [navigate]
  );

  return (
    <ChatRoomContainer>
      {MBTIS.map((mbti) => (
        <div key={mbti} onClick={() => onCiickMBTI(mbti)} tabIndex={-1}>
          {mbti}
        </div>
      ))}
    </ChatRoomContainer>
  );
};

export default ChatRooms;
