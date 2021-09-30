import Axios from "axios";
import { Config } from "src/constants/config";

export const API = Axios.create({
  baseURL: Config.REST_API_URL,
});
