import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { loginState } from "../redux/login";

export const SocketContext = createContext();
let socketCon;

export const SocketStateProvider = ({ children }) => {
  const { user } = useSelector(loginState);

  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [recieveMessage, setRecieveMessage] = useState(null);

  const createSocketInstance = async (userId) => {
    const id = userId ?? user?.id;

    if (id === null || id === undefined) return;

    try {
      socketCon = io(process.env.REACT_APP_SOCKET_URL, {
        query: { userId: id, application: "FF" },
        transports: ["websocket"],
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5,
      });

      setSocket(socketCon);
      socketCon.on("connection", () => {
        setConnected(true);
        socketCon.removeAllListeners();
        addEventListners(socketCon);
      });

      socketCon.on("connect_error", (err) => {
        console.log(`Socket connect_error due to ${err.message}`);
      });
    } catch (e) {
      console.log(e);
    }
  };

  function setUserId(userId) {
    if (socketCon) {
      socketCon.emit("new-user-add", userId);
      socketCon.on("get-users", (users) => {
        setOnlineUsers(users);
      });
    }
  }

  function sendSocketMessage(data) {
    if (socketCon) {
      socketCon.emit("send-message", data);
    }
  }
  function recieveSocketMessageOn() {
    if (socketCon) {
      const handleReceiveMessage = (data) => {
        setRecieveMessage((prevData) => data.latestmessage);
      };
      socketCon.on("recieve-message", handleReceiveMessage);
    }
  }
  function recieveSocketMessageOff(data) {
    if (socketCon) {
      const handleReceiveMessage = (data) => {
        setRecieveMessage((prevData) => data.latestmessage);
      };
      socketCon.off("recieve-message", handleReceiveMessage);
    }
  }

  //   const disconnectSocket = async () => {
  //     socket.close();
  //   };
  const disconnectSocket = async () => {
    if (socketCon) {
      socketCon.removeAllListeners();
      socketCon.close();
    }
  };

  function addEventListners(socket) {}

  return (
    <SocketContext.Provider
      value={{
        socket,
        connected,
        setUserId,
        sendSocketMessage,
        recieveSocketMessageOn,
        recieveSocketMessageOff,
        createSocketInstance,
        disconnectSocket,
        onlineUsers,
        recieveMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
