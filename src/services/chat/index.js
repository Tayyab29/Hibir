import appUrl from "../../utils/Constants/appUrl";
import { postData, putData } from "../generic";

export async function fetchChatsById(data) {
  return postData(appUrl["chat"].findChatById, data);
}
export async function createChat(data) {
  return postData(appUrl["chat"].chatCreate, data);
}
