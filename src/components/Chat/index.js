import { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState({});
  const { id } = useParams();

  useEffect(() => {
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });

    // db.collection("rooms")
    //   .doc(id)      
    //   .onSnapshot((snapshot) => {
    //     setRoom(snapshot.docs.map((doc) => doc.data()));
    //   });
  }, [messages, room, id]);

  return (
    <div className="chat">
      <header className="chat__header">
        <div className="chat__headerLeft">
          <Avatar />
          <div className="chat__headerInfo">
            <h3>Room </h3>
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
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <AttachFileOutlined />
        <form action="">
          <input type="text" placeholder="Type a message" />
          <button>Send</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
