import appUrl from "../../utils/Constants/appUrl";
import { getData, postData, putData } from "../generic";

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
export async function updateUser(data) {
  return putData(appUrl["users"].updateUser, data);
}
export async function valideUserEmail(data) {
  return postData(appUrl["users"].validateEmail, data);
}
export async function forgetPassword(data) {
  return postData(appUrl["users"].forgetPassword, data);
}

// Google Login and Sign Up
export async function googleLogin(data) {
  return postData(appUrl["google"].login, data);
}
export async function googleSignup(data) {
  return postData(appUrl["google"].signup, data);
}

export async function logout() {
  localStorage.clear();
  window.location.reload();
}
