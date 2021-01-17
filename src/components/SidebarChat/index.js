import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./SidebarChat.css";

function SidebarChat({ room }) {
  return (
    <Link to={`/rooms/${room.id}`}>
      <div className="sidebar__chat">
        <div className="sidebar__chatAvatar">
          <Avatar />
        </div>
        <div className="sidebar__chatInfo">
          <h3>{room.name}</h3>
          <p>Last message 🔥</p>
        </div>
      </div>
    </Link>
  );
}

export default SidebarChat;
