import appUrl from "../../utils/Constants/appUrl";
import { getData, postData } from "../generic";

export async function fetchCountries(data) {
  return getData(appUrl["genral"].countries, data);
}
export async function fetchZipCode(data) {
  return postData(appUrl["genral"].zipCode, data);
}
