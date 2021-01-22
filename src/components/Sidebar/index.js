import { useContext, useEffect, useState } from "react";
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
import { Context } from "../../Context/GlobalState";
import NewChatModal from "../NewChatModal";
import { db } from "../../firebase/config";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    const unsub = db
      .collection("rooms")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setRooms(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });

    return () => unsub();
  }, []);

  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <div className="sidebar__headerLeft">
          <Avatar src={user.photoURL} />
        </div>
        <div className="sidebar__headerRight">
          <IconButton onClick={() => setIsModalOpen(true)}>
            <Add />
          </IconButton>
          {isModalOpen && (
            <NewChatModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
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
          <SidebarChat room={room} key={room.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
