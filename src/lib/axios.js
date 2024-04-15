import baseAxios from "axios";

const baseURL = process.env.NEXT_PUBLIC_LINKBRARY_BASEURL;

const axios = baseAxios.create({
  baseURL: baseURL,
});

export default axios;
