import appUrl from "../../utils/Constants/appUrl";
import { postData, putData } from "../generic";

export async function advertiseCreate(data) {
  return postData(appUrl["advertise"].create, data);
}
export async function advertiseUpdation(data) {
  return putData(appUrl["advertise"].edit, data);
}
export async function advertiseFileUpload(data) {
  return postData(appUrl["advertise"].fileUpload, data);
}
