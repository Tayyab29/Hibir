import appUrl from "../../utils/Constants/appUrl";
import { postData } from "../generic";

export async function login(data) {
  return postData(appUrl["users"].login, data);
}
export async function signup(data) {
  return postData(appUrl["users"].signup, data);
}

export async function logout() {
  localStorage.clear();
  window.location.reload();
}
