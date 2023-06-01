import axios from "axios";

export default axios.create({
  baseURL: process.env.NEXT_BASE_URL_BUROFY,
});
