import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./SidebarChat.css";

function SidebarChat({ room }) {
  return (
    <div className="sidebar__chat">
      <div className="sidebar__chatAvatar">
        <Avatar />
      </div>
      <Link to={`/rooms/${room.id}`}>
        <div className="sidebar__chatInfo">
          <h3>{room.name}</h3>
          <p>Last message 🔥</p>
        </div>
      </Link>
    </div>
  );
}

export default SidebarChat;
