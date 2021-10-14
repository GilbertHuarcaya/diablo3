/* eslint-disable prettier/prettier */
import { post } from "axios";

const clientId = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET

const region = "eu";
const API_URL = `https://${region}.battle.net/oauth/token`;

function getToken() {
  // Creamos un objeto de tipo 'FormData', que es un conjunto de pares clave/valor
  const body = new FormData();

  // Con 'append', le agregamos la clave 'grant_type' y el valor 'client_credentials'
  body.append("grant_type", "client_credentials");

  // En este objeto llamado 'config' vamos a insertar algunos parámetros de configuración
  // que necesitamos para hacer la llamada.
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
    // Nuestros datos de cliente para OAuth: id y secret
    auth: { username: clientId, password: clientSecret },
  };

  // Hacemos una peticion POST
  // Le pasamos la URL como primer parámetro
  // Como segundo, el body, que es un FormData
  // Y la configuración como tercer argumento
  return post(API_URL, body, config);
}

// Exportamos la función para poder usarla más tarde
export { getToken };
