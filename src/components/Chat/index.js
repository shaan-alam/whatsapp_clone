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
