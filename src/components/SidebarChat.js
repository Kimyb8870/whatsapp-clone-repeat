import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 100));
  }, []);

  const createChat = () => {
    const roomName = prompt("please type name of new room");
    console.log(roomName);

    if (roomName) {
      //do something with database
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>last message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat sidebarChat__newRoom" onClick={createChat}>
      <h2>Add new rooms</h2>
    </div>
  );
};

export default SidebarChat;
