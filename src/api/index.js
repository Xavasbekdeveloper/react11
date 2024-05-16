import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://6645ed7db8925626f893c23c.mockapi.io/api/v1/",
});

export default mainUrl;
