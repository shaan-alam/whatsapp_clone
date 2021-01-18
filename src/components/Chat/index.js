import { useState, useEffect, useContext } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFileOutlined,
  InsertEmoticon,
  Mic,
  MoreVert,
  Search,
} from "@material-ui/icons";
import "./Chat.css";
import ChatMessage from "../ChatMessage";
import { db } from "../../firebase/config";
import { Context } from "../../Context/GlobalState";
import firebase from "firebase";
import { useParams } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [room, setRoom] = useState("");
  const { user } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });

    db.collection("rooms")
      .doc(id)
      .onSnapshot((snapshot) => setRoom(snapshot.data().name));
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (input !== "") {
      db.collection("rooms").doc(id).collection("messages").add({
        senderId: user.user.uid,
        senderName: user.user.displayName,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
  };

  return (
    <div className="chat">
      <header className="chat__header">
        <div className="chat__headerLeft">
          <Avatar />
          <div className="chat__headerInfo">
            <h3>{room}</h3>
            <p>Last seen at ....</p>
          </div>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </header>
      <div className="chat__body">
        <ScrollToBottom className="chat__messages">
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <AttachFileOutlined />
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Send</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
