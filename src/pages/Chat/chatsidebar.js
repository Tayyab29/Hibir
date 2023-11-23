import React, { useEffect, useState } from "react";
import CustomInput from "../../ui-components/custominput";
import { useSelector } from "react-redux";
import { loginState } from "../../redux/login";
import { fetchChatsById } from "../../services/chat";
import moment from "moment/moment";

const ChatSidebar = (props) => {
  const { selectedChat, setSelectedChat, user = "", onlineUsers } = props;
  const [chats, setChats] = useState([]);

  const getUserChats = async () => {
    let payload = {
      userId: user._id,
    };
    const { data } = await fetchChatsById(payload);
    if (data.status) {
      setChats(data.chat);
    }
  };

  useEffect(() => {
    if (user) {
      getUserChats();
    }
  }, [user]);

  return (
    <>
      <div className="main_div">
        <div className="pb-1">
          <CustomInput type="text" className="chat_search" placeholder="Search" />
        </div>
        {/* Chats Users */}

        {/* Chat Users */}
        <div className="custom-scrollbar">
          {chats.map((data, index) => {
            const other_user = data.users.find((item) => item._id !== user?._id);
            const online = onlineUsers.find((item) => item?.userId === other_user?._id);

            return (
              <div
                className={`chat_sidebar_hovering ${
                  data._id === selectedChat?.chatId ? "active_user" : "inactive_user"
                }`}
                key={index}
                onClick={() => setSelectedChat({ chatId: data._id, receiverId: other_user._id })}
              >
                <div>
                  <span className="user_names">
                    {(other_user.firstName ?? "") + " " + (other_user.lastName ?? "")}
                  </span>
                  <small className={online ? "user_status_online" : "user_status_offline"}>
                    {online ? "Online" : "Offline"}{" "}
                  </small>
                </div>
                <div>
                  <span className="user_date_time">
                    {moment(data.updatedAt).format("YYYY-MM-DD")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
