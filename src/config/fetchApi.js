import axios from "axios";
import { url } from "./authoritize";

export const fetchApi = (params) => {
  return axios.post(
    url + "admin/auth/login",
    { ...params },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};
