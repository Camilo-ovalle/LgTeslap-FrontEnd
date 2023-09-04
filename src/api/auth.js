import axios from "axios";
import { API } from "../config.js";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

export const loginRequest = (user) => axios.post(`${API}/login`, user);

export const registerRequest = (user) => axios.post(`${API}/register`, user);

export const logOutRequest = async () => await axios.post(`${API}/logout`);
