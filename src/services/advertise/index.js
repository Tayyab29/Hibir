import appUrl from "../../utils/Constants/appUrl";
import { postData } from "../generic";

export async function advertiseCreate(data) {
  return postData(appUrl["advertise"].create, data);
}
