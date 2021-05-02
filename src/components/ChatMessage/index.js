import { useContext } from "react";
import { Context } from "../../Context/GlobalState";
import "./ChatMessage.css";

function ChatMessage({ message }) {
  const { user } = useContext(Context);   

  return (
    <div
      className={`chat__message ${
        message.senderId === user.uid ? "chat__receiver" : ""
      }`}
    >
      <p className="chat__messageSender">{message.senderName}</p>
      <p className="chat__messageTxt">
        {message.message}
        <span>{new Date(message.timestamp?.toDate()).toUTCString()}</span>
      </p>
    </div>
  );
}

export default ChatMessage;
