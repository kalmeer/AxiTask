import axios from "axios";

const instance = axios.create({
  baseURL: "https://coded-pets-api-crud.eapi.joincoded.com",
});

export default instance;
