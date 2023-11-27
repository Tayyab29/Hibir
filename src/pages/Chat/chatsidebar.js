import React, { useEffect, useState } from "react";

// Moment
import moment from "moment/moment";

// Components
import CustomInput from "../../ui-components/custominput";

// Api's
import { fetchChatsById } from "../../services/chat";

const ChatSidebar = (props) => {
  const { selectedChat, setSelectedChat, user = "", onlineUsers } = props;
  const [chats, setChats] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filterChat, setFilterChat] = useState([]);

  const getUserChats = async () => {
    let payload = {
      userId: user._id,
    };
    const { data } = await fetchChatsById(payload);
    if (data.status) {
      setChats(data.chat);
      setFilterChat(data.chat);
    }
  };

  const searchHandler = () => {
    const filteredList = chats.filter((item) => {
      const other_user = item.users.find((item) => item._id !== user?._id);

      if (other_user) {
        const fullName = `${other_user.firstName} ${other_user.lastName} `;
        return fullName.toLowerCase().includes(keyword.toLowerCase());
      }
    });
    setFilterChat(filteredList);
  };

  useEffect(() => {
    if (user) {
      getUserChats();
    }
  }, [user]);

  useEffect(() => {
    if (keyword != null) {
      const delayDebounceFn = setTimeout(() => {
        searchHandler();
      }, 250);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [keyword]);

  return (
    <>
      <div className="main_div">
        <div className="pb-1">
          <CustomInput
            type="text"
            className="chat_search"
            placeholder="Search"
            id="keyword"
            name="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        {/* Chats Users */}

        {/* Chat Users */}
        <div className="custom-scrollbar">
          {filterChat.map((data, index) => {
            const other_user = data.users.find((item) => item._id !== user?._id);
            const online = onlineUsers.find((item) => item?.userId === other_user?._id);
            const fullName = (other_user.firstName ?? "") + " " + (other_user.lastName ?? "");

            return (
              <div
                className={`chat_sidebar_hovering ${
                  data._id === selectedChat?.chatId ? "active_user" : "inactive_user"
                }`}
                key={index}
                onClick={() => setSelectedChat({ chatId: data._id, receiverId: other_user._id })}
              >
                <div>
                  <span className="user_names">{getHighlightedText(fullName, keyword)}</span>
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

// Text Highligher Code
function getHighlightedText(text, higlight) {
  // Split text on higlight term, include term itself into parts, ignore case
  var parts = text.split(new RegExp(`(${higlight})`, "gi"));
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === higlight.toLowerCase() ? (
        <b style={{ backgroundColor: "#1eb55fb2" }}>{part}</b>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}
