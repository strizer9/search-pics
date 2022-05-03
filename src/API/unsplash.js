import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 0cgPnzUFfQJoKI6aeCWweRPCEs-4BM8FA-UamrWhTJs",
  },
});
