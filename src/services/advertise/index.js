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
export async function fetchAdvertisement(data) {
  return postData(appUrl["advertise"].getAdvertise, data);
}
export async function fetchAdvertisementById(data) {
  return postData(appUrl["advertise"].getAdvertiseById, data);
}
export async function fetchCustomerAdvertisement(data) {
  return postData(appUrl["advertise"].getCustomerAdvertise, data);
}
