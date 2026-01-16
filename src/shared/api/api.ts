import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

let apiInstance: ReturnType<typeof axios.create>;

export const getApi = () => {
  if (!apiInstance) {
    apiInstance = axios.create({
      baseURL: __API__ || '',
      headers: {
        Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
      }
    });
  }
  return apiInstance;
};

// Для обратной совместимости
export const $api = getApi();