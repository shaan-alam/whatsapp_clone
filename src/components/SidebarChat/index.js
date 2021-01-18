import { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./SidebarChat.css";
import { db } from "../../firebase/config";

function SidebarChat({ room }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    db.collection("rooms")
      .doc(room.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessage(snapshot.docs[0].data().message);
      });
  }, [message, room.id]);

  return (
    <Link to={`/rooms/${room.id}`}>
      <div className="sidebar__chat">
        <div className="sidebar__chatAvatar">
          <Avatar />
        </div>
        <div className="sidebar__chatInfo">
          <h3>{room.name}</h3>
          <p>{message}</p>
        </div>
      </div>
    </Link>
  );
}

export default SidebarChat;
