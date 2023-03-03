import axios from "axios";

const api = axios.create({
  baseURL: "https://demo7919674.mockable.io"
});

api.defaults.headers.post["Accept"] = "application/json";

export default api;
