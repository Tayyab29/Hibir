import axios from "axios";
import axiosInstance from "../../utils/interceptor";
let BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getData(endpoint, withToken = true) {
  if (withToken) {
    return axiosInstance.get(endpoint);
  } else {
    return axios.get(BASE_URL + endpoint);
  }
}

export async function postData(endpoint, data, withToken = true) {
  if (withToken) {
    return axiosInstance.post(endpoint, data);
  } else {
    return axios.post(BASE_URL + endpoint, data);
  }
}

export async function putData(endpoint, data, withToken = true) {
  if (withToken) {
    return axiosInstance.put(endpoint, data);
  } else {
    return axios.put(BASE_URL + endpoint, data);
  }
}

export async function patchData(endpoint, data, withToken = true) {
  if (withToken) {
    return axiosInstance.patch(endpoint, data);
  } else {
    return axios.patch(BASE_URL + endpoint, data);
  }
}

export async function deleteData(endpoint, withToken = true) {
  if (withToken) {
    return axiosInstance.delete(endpoint);
  } else {
    return axios.delete(BASE_URL + endpoint);
  }
}
