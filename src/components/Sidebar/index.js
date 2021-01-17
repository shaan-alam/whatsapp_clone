import { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import {
  Add,
  ChatBubble,
  DonutLarge,
  MoreVert,
  Search,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import "./Sidebar.css";
import SidebarChat from "../SidebarChat";

import { db } from "../../firebase/config";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [rooms]);

  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <div className="sidebar__headerLeft">
          <Avatar />
        </div>
        <div className="sidebar__headerRight">
          <IconButton>
            <Add />
          </IconButton>
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
        {rooms.map((room) => (
          <SidebarChat room={room} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
