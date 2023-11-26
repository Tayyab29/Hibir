import appUrl from "../../utils/Constants/appUrl";
import { postData, putData } from "../generic";

export async function fetchNotificationById(data) {
  return postData(appUrl["notification"].findNotificationById, data);
}
export async function fetchNotificationCount(data) {
  return postData(appUrl["notification"].findNotificationCount, data);
}
export async function readNotification(data) {
  return postData(appUrl["notification"].readingNotification, data);
}
