import appUrl from "../../utils/Constants/appUrl";
import { postData, putData } from "../generic";

export async function fetchMessageByChatId(data) {
  return postData(appUrl["message"].findMessageByChatId, data);
}
export async function sendMessage(data) {
  return postData(appUrl["message"].sendMessage, data);
}
