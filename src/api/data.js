import axios from "axios";
import { API } from "../config.js";

export const usrList = async () => {
  const data = await axios.get(`${API}/users`);
  return data;
};
