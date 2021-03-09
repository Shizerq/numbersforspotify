/* eslint-disable camelcase */
import { encode } from "js-base64";
import SpotifyWebAPI from "spotify-web-api-js";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

import { REDIRECT_URI } from "../screens/Login";
import URLs from "./URLs";

const saveCredentials = async (value: string) => {
  await AsyncStorage.setItem("credentials", value);
};

const getCredentials = async () => {
  const data = await AsyncStorage.getItem("credentials");

  if (data) {
    return JSON.parse(data);
  }

  return undefined;
};

export const fetchSecret = async () => {
  const res = await axios.get(URLs.secret);
  const spotifyCredentials = res.data;

  return spotifyCredentials;
};

export const fetchToken = async (code: string) => {
  try {
    const authorizationCode = code;
    const secret = await fetchSecret();
    const credsB64 = encode(`${secret.clientId}:${secret.clientSecret}`);

    const response = await axios.post(
      URLs.tokenEndpoint,
      `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${REDIRECT_URI}`,
      {
        headers: {
          Authorization: `Basic ${credsB64}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const res = await response.data;

    if (res.access_token) {
      const expirationTime = new Date().getTime() + res.expires_in * 1000;
      saveCredentials(JSON.stringify({ ...res, expirationTime }));
    }

    return res;
  } catch (err) {
    console.error(err);
  }
};

export const refreshTokens = async () => {
  try {
    const secret = await fetchSecret();
    const credsB64 = encode(`${secret.clientId}:${secret.clientSecret}`);
    const credentials = await getCredentials();
    const refresh_token = credentials?.refresh_token;

    const response = await axios.post(
      URLs.tokenEndpoint,
      `grant_type=refresh_token&refresh_token=${refresh_token}`,
      {
        headers: {
          Authorization: `Basic ${credsB64}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const res = await response.data;

    if (res.access_token) {
      const expirationTime = new Date().getTime() + res.expires_in * 1000;

      saveCredentials(
        JSON.stringify({ ...res, expirationTime, refresh_token }),
      );
    }

    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getValidTokenAsync = async () => {
  const credentials = await getCredentials();
  const { expirationTime } = credentials;

  try {
    if (new Date().getTime() > expirationTime - 600) {
      console.info("Unauthorized - refreshing tokens...");
      const result = await refreshTokens();

      return result.access_token;
    }
  } catch (err) {
    console.error(err);
  }

  return credentials.access_token;
};

export const API = async () => {
  const token = await getValidTokenAsync();
  const client = new SpotifyWebAPI();
  client.setAccessToken(token);
  return client;
};

export default API;
