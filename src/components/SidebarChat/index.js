import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebar__chat">
      <div className="sidebar__chatAvatar">
        <Avatar />
      </div>
      <div className="sidebar__chatInfo">
        <h3>Chat Name</h3>
        <p>Last message 🔥</p>
      </div>
    </div>
  );
}

export default SidebarChat;
