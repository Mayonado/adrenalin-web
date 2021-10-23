import axios from "axios";

/*Create instance of axios*/
export const httpAxios = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});
