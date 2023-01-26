import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {

  //Se tiver contexto é server side render, se não lado do browser
  const { 'nextauth.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3000'
  })

  // A cada recepção que o axios fizer eu quero que faça algo
  api.interceptors.request.use(config => {
    console.log(config);

    return config;
  })

  if(token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api;
}