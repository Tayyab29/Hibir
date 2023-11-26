import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Icons
import { FaCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loginState } from "../../redux/login";
import {
  mainViewState,
  onNotificationMutated,
  onNotificationSelectedChat,
} from "../../redux/main-view";

// Api's
import { fetchNotificationById, readNotification } from "../../services/notification";

// Styles
import "./notification.css";

const NotificationBox = ({ close }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector(loginState);
  const { screens } = useSelector(mainViewState);
  const [notificationRec, setNotificationRec] = useState([]);

  // Api's Handler
  const getNotification = async () => {
    try {
      const { data } = await fetchNotificationById({
        id: user?._id,
      });
      if (data.status) {
        groupNotification(data?.result);
      }
    } catch (error) {
      console.log(error);
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

  // // Handlers
  const groupNotification = (notifications) => {
    // Group notifications by senderId and count
    const groupedNotifications = notifications.reduce((grouped, notification) => {
      const { senderId, chatId } = notification;
      const senderIdString = JSON.stringify(senderId);

      if (grouped.has(senderIdString)) {
        const existingValue = grouped.get(senderIdString);
        grouped.set(senderIdString, { count: existingValue.count + 1, chatId });
      } else {
        grouped.set(senderIdString, { count: 1, chatId });
      }

      return grouped;
    }, new Map());

    // Convert the grouped notifications to an array
    const summarizedNotifications = Array.from(groupedNotifications).map(
      ([senderIdString, { count, chatId }]) => {
        const senderId = JSON.parse(senderIdString);
        return { senderId, count, chatId };
      }
    );
    setNotificationRec(summarizedNotifications);
  };

  const viewChatHandler = (id, chat_id) => {
    dispatch(onNotificationSelectedChat({ chatId: chat_id, receiverId: id }));
    readUserNotification(id);
    history.push("/chatindex");
    close();
  };

  // UseEffect
  useEffect(() => {
    getNotification();
  }, [user]);

  return (
    <div className="notify_container">
      <div className="notify_box_wrapper">
        <div className="header_wrapper">
          <div className="header">
            <p className="header_text">Notifications</p>
            <p>{`(${screens.notification.count})`}</p>
          </div>
          <IoIosClose className="close_icon" onClick={() => close()} />
        </div>

        <hr className="border_line" />
        <div className="notify-scroll">
          {notificationRec.length === 0 ? (
            <div>No Notification</div>
          ) : (
            notificationRec.map((item, index) => {
              return (
                <div
                  className="notify_box "
                  key={index}
                  onClick={() => viewChatHandler(item.senderId._id, item.chatId)}
                >
                  <p>
                    You have recieved a new message from
                    {" " + (item.senderId.firstName ?? "") + " " + item.senderId.lastName}
                    <span className="single_notify_count">{`(${item.count})`}</span>
                  </p>
                  <FaCircle className="circle_icon" />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationBox;
