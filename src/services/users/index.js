import appUrl from "../../utils/Constants/appUrl";
import { getData, postData } from "../generic";

export async function login(data) {
  return postData(appUrl["users"].login, data);
}
export async function signup(data) {
  return postData(appUrl["users"].signup, data);
}
export async function getUserDetails(data) {
  return getData(appUrl["users"].userDetails, data);
}

export async function getUserDetailsById(data) {
  return postData(appUrl["users"].userById, data);
}

export async function logout() {
  localStorage.clear();
  window.location.reload();
}
