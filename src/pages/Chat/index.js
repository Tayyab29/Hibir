import React, { useContext, useEffect, useRef, useState } from "react";
import ChatSidebar from "./chatsidebar";
import ChatMainArea from "./chatmainarea";
import { fetchMessageByChatId } from "../../services/messages";
import { useDispatch, useSelector } from "react-redux";
import { loginState } from "../../redux/login";
import { SocketContext } from "../../context/socket";
import "./chatindex.scss";
import { mainViewState, onNotificationMutated } from "../../redux/main-view";
import { readNotification } from "../../services/notification";

const socket_url = process.env.REACT_APP_SOCKET_URL;
var selectedChatCompare;

const ChatIndex = () => {
  const { user } = useSelector(loginState);
  const { screens } = useSelector(mainViewState);

  const socketContext = useContext(SocketContext);
  const dispatch = useDispatch();

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

  const readUserNotification = async (id) => {
    readNotification({
      userId: id,
    })
      .then(() => {
        dispatch(onNotificationMutated());
      })
      .catch((error) => {
        console.log(error);
      });
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

  // Socket Send Message
  useEffect(() => {
    if (sendMessage) {
      socketContext.sendSocketMessage(sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socketContext.recieveSocketMessageOn();

    // return () => {
    //   socketContext.recieveSocketMessageOff();
    // };
  }, []);

  // Socket Recieving Message
  useEffect(() => {
    if (socketContext.recieveMessage) {
      if (selectedChat?.receiverId === socketContext?.recieveMessage?.latestmessage?.senderId) {
        setMessages((prev) => [...prev, socketContext.recieveMessage.latestmessage]);
        readUserNotification(selectedChat?.receiverId);
      }
    }
  }, [socketContext.recieveMessage]);

  // If user select chat from Notification Box
  useEffect(() => {
    if (screens.notification?.chatData) {
      setSelectedChat(screens.notification.chatData);
    }
  }, [screens.notification?.chatData]);

  // useEffect(()=>{
  //   if(selectedChat){

  //   }
  // },[selectedChat])

  return (
    <>
      <div className="chat_sidebar">
        <div className="chat_container">
          <div className="row">
            <div className="col-12 col-md-3 padding_right_0">
              <ChatSidebar
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
                user={user}
                onlineUsers={onlineUsers}
              />
            </div>
            <div className="col-12 col-md-9 padding_left_0">
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
