import axios from "../axios";

export async function logoutUser() {
  await axios.get("/api/logout");
}
