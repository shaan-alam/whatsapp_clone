import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import "./NewChatModal.css";
import firebase from "firebase";
import { db } from "../../firebase/config";

function NewChatModal({ isModalOpen, setIsModalOpen }) {
  const [newChat, setNewChat] = useState("");

  const createNewChat = () => {
    if (newChat !== "") {
      db.collection("rooms").add({
        name: newChat,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setNewChat("");
      setIsModalOpen(false);
    }
  };

  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="modal__container">
        <div className="modal__content">
          <h1>New Chat</h1>
          <div className="input__newChat">
            <input
              type="text"
              placeholder="New Chat"
              value={newChat}
              onChange={(e) => setNewChat(e.target.value)}
            />
          </div>
          <div className="modal__actions">
            <Button onClick={createNewChat}>Add</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default NewChatModal;
