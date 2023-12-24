import React, { useEffect, useRef, useState } from "react";
import CustomInput from "../../ui-components/custominput";
import { sendMessage } from "../../services/messages";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

const ChatMainArea = (props) => {
  const { socket, messages, user, selectedChat, setSendMessage, recieveMessage, setMessages } =
    props;
  const chatWindowRef = useRef(null);
  const handleScroll = async () => {
    const { scrollTop } = chatWindowRef.current;
    // if (scrollTop === 0 && hasMoreMessages) {
    //   getMessages();
    // }
  };

  const [newMessage, setNewMessage] = useState("");
  const sendMessageHandler = async () => {
    let payload = {
      chatId: selectedChat.chatId,
      recieverId: selectedChat?.receiverId,
      senderId: user?._id,
      text: newMessage,
    };
    const { data } = await sendMessage(payload);
    if (data.status) {
      setNewMessage("");
      const _send = data.result;
      setMessages((prev) => [...prev, _send]);
      const receiverId = selectedChat?.receiverId;
      setSendMessage({ latestmessage: _send, receiverId });
    }
  };

  const inputHandler = (msg) => {
    setNewMessage(msg);
  };

  const renderMessageTime = (createdAt) => {
    const today = new Date();
    const messageDate = new Date(createdAt);

    if (today.toDateString() === messageDate.toDateString()) {
      // If the message is from today, format as "HH:mm am/pm"
      return messageDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } else if (
      today.getFullYear() === messageDate.getFullYear() &&
      today.getMonth() === messageDate.getMonth() &&
      today.getDate() - messageDate.getDate() === 1
    ) {
      // If the message is from yesterday, show "Yesterday" and time
      return `Yesterday ${messageDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    } else {
      // Show the full date and time for messages older than yesterday
      return messageDate.toLocaleString([], {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  useEffect(() => {
    if (selectedChat) {
      if (chatWindowRef.current) {
        setTimeout(function () {
          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }, 100);
      } else {
        setTimeout(function () {
          chatWindowRef.current.scrollTop = 100;
        }, 100);
      }
    }
  }, [messages]);

  return (
    <>
      <div className="main_area_style">
        {selectedChat ? (
          <>
            <div className="custom-scrollbar_main_area width_100" ref={chatWindowRef} onScroll={handleScroll}>
              {messages.map((item, index) => {
                return (
                  <div
                    className={
                      user._id !== item.senderId ? "container_chat" : "container_chat_darker"
                    }
                    key={index}
                  >
                    <p>{item.text}</p>
                    {/* <p>{format(item.createdAt)}</p> */}
                    <p className="chat_time_show">{renderMessageTime(item.createdAt)}</p>
                  </div>
                );
              })}
              <div style={{ clear: "both" }}></div>
            </div>
            <div className="fixed_input">
              <div className="row">
                <div className="col-10">
                  <InputEmoji
                    className="messgae_input"
                    placeholder="Type Your Message.. "
                    id="type_message"
                    name="type_message"
                    value={newMessage}
                    onChange={inputHandler}
                  />
                  {/* <CustomInput
                className="messgae_input"
                placeholder="Type Your Message.. "
                id="type_message"
                name="type_message"
                onChange={inputHandler}
              /> */}
                </div>
                <div className="col-2 send_btn_chat">
                  <button
                    type="submit"
                    className={newMessage === "" ? "send_btn_not" : "send_btn"}
                    onClick={newMessage === "" ? null : () => sendMessageHandler()}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="no_chat_wrapper">
            <h6>Select Chat to view Messages</h6>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatMainArea;
