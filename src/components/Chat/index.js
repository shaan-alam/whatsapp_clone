import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert, Search } from "@material-ui/icons";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <header className="chat__header">
        <div className="chat__headerLeft">
          <Avatar />
          <div className="chat__headerInfo">
            <h3>Room Name</h3>
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
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
