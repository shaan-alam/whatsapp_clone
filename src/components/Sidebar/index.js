import { Avatar } from "@material-ui/core";
import { ChatBubble, DonutLarge, MoreVert, Search } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <div className="sidebar__avatar">
          <Avatar />
        </div>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatBubble />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </header>
      <div className="sidebar__search">
        <div className="sidebar__searchInput">
          <Search />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <div className="sidebar__chat">
          <div className="sidebar__chatAvatar">
            <Avatar />
          </div>
          <div className="sidebar__chatInfo">
            <h3>Chat Name</h3>
            <p>Last message 🔥</p>
          </div>
        </div>
        <div className="sidebar__chat">
          <div className="sidebar__chatAvatar">
            <Avatar />
          </div>
          <div className="sidebar__chatInfo">
            <h3>Chat Name</h3>
            <p>Last message 🔥</p>
          </div>
        </div>
        <div className="sidebar__chat">
          <div className="sidebar__chatAvatar">
            <Avatar />
          </div>
          <div className="sidebar__chatInfo">
            <h3>Chat Name</h3>
            <p>Last message 🔥</p>
          </div>
        </div>
        <div className="sidebar__chat">
          <div className="sidebar__chatAvatar">
            <Avatar />
          </div>
          <div className="sidebar__chatInfo">
            <h3>Chat Name</h3>
            <p>Last message 🔥</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
