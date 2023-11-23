import React, { useContext, useEffect, useRef, useState } from "react";
import "./chatindex.scss";
import ChatSidebar from "./chatsidebar";
import ChatMainArea from "./chatmainarea";
import { fetchMessageByChatId } from "../../services/messages";
import { useSelector } from "react-redux";
import { loginState } from "../../redux/login";
import io from "socket.io-client";
import { SocketContext } from "../../context/socket";

const socket_url = process.env.REACT_APP_SOCKET_URL;
var selectedChatCompare;

const ChatIndex = () => {
  const { user } = useSelector(loginState);

  const socketContext = useContext(SocketContext);

  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);
  const [isSocket, setIsSocket] = useState(false);
  const socket = useRef();

  const getMessageByChatId = async () => {
    const { data } = await fetchMessageByChatId({ chatId: selectedChat.chatId });
    if (data.status) {
      setMessages(data.result);
    }
  };

  useEffect(() => {
    if (selectedChat) {
      getMessageByChatId();
    }
  }, [selectedChat]);
  useEffect(() => {
    // Update the local state when onlineUsers change in the context
    setOnlineUsers(socketContext.onlineUsers);
  }, [socketContext.onlineUsers]);

  useEffect(() => {
    if (sendMessage) {
      socketContext.sendSocketMessage(sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socketContext.recieveSocketMessageOn();

    return () => {
      socketContext.recieveSocketMessageOff();
    };
  });
  useEffect(() => {
    if (socketContext.recieveMessage) {
      setMessages((prev) => [...prev, socketContext.recieveMessage]);
    }
  }, [socketContext.recieveMessage]);

  // useEffect(() => {
  //   socket.current = io(socket_url);
  //   socket.current.emit("new-user-add", user?._id);
  //   socket.current.on("get-users", (users) => {
  //     setOnlineUsers(users);
  //   });
  //   // socket.current.emit("setup", user);
  //   socket.current.on("connection", () => setIsSocket(true));
  // }, []);

  // useEffect(() => {
  //   if (sendMessage) {
  //     socket.current.emit("send-message", sendMessage);
  //   }
  // }, [sendMessage]);

  // useEffect(() => {
  //   // // if (sendMessage) {
  //   // socket.current.on("recieve-message", (data) => {
  //   //   console.log({ data });
  //   //   // console.log({ first: data.length });
  //   //   setRecieveMessage(data);
  //   //   // messages.push(data.latestmessage);
  //   // });
  //   // // }
  //   const handleReceiveMessage = (data) => {
  //     console.log("Handling received message:", data);
  //     setRecieveMessage((prevData) => data.latestmessage);
  //     console.log("Updated recieveMessage:", recieveMessage);
  //   };

  //   // Attach the event listener
  //   socket.current.on("recieve-message", handleReceiveMessage);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     socket.current.off("recieve-message", handleReceiveMessage);
  //   };
  // });

  // console.log({ sendMessage });
  // console.log({ recieveMessage });

  // useEffect(() => {
  //   console.log("Component rendered with recieveMessage:", recieveMessage);
  //   if (recieveMessage) {
  //     setMessages((prev) => [...prev, recieveMessage]);
  //   }
  // }, [recieveMessage]);

  return (
    <>
      <div className="chat_sidebar">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3" style={{ paddingRight: "0" }}>
              <ChatSidebar
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
                user={user}
                onlineUsers={onlineUsers}
              />
            </div>
            <div className="col-12 col-md-9" style={{ paddingLeft: "0" }}>
              <ChatMainArea
                socket={socket}
                messages={messages}
                user={user}
                selectedChat={selectedChat}
                setSendMessage={setSendMessage}
                recieveMessage={recieveMessage}
                setMessages={setMessages}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatIndex;
