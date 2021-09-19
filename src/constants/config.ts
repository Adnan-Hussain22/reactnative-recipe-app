import _ from "lodash-es";
import {
  PROD,
  BASE_URL_PROD,
  BASE_URL_DEV,
  SOCKET_URL_PROD,
  SOCKET_URL_DEV,
  GRAPHQL_ENDPOINT,
  REST_API_ENDPOINT,
  CLOUNDINARY_CLOUD_NAME,
  CLOUNDINARY_API_BASE_URL,
  CLOUNDINARY_UPLOAD_PRESET,
} from "@env";

export enum ConfigEnum {
  BASE_URL = "BASE_URL",
  REST_API_URL = "REST_API_URL",
  GRAPHQL_URL = "GRAPHQL_URL",
  SOCKET_URL = "SOCKET_URL",
  PROD = "PROD",
  CLOUNDINARY_CLOUD_NAME = "CLOUNDINARY_CLOUD_NAME",
  CLOUNDINARY_API_BASE_URL = "CLOUNDINARY_API_BASE_URL",
  CLOUNDINARY_UPLOAD_PRESET = "CLOUNDINARY_UPLOAD_PRESET",
}

const Env: any = {
  PROD,
  BASE_URL_PROD,
  BASE_URL_DEV,
  SOCKET_URL_PROD,
  SOCKET_URL_DEV,
  GRAPHQL_ENDPOINT,
  REST_API_ENDPOINT,
};

const BASE_URL = PROD ? BASE_URL_PROD : BASE_URL_DEV;

const SOCKET_URL = PROD ? SOCKET_URL_PROD : SOCKET_URL_DEV;

const requiredEnv = [
  "BASE_URL_PROD",
  "BASE_URL_DEV",
  "SOCKET_URL_PROD",
  "SOCKET_URL_DEV",
  "REST_API_ENDPOINT",
  "GRAPHQL_ENDPOINT",
];

const config = {
  [ConfigEnum.GRAPHQL_URL]: `${BASE_URL}${GRAPHQL_ENDPOINT}`,
  [ConfigEnum.SOCKET_URL]: SOCKET_URL,
  [ConfigEnum.BASE_URL]: BASE_URL,
  [ConfigEnum.REST_API_URL]: `${BASE_URL}${REST_API_ENDPOINT}`,
  [ConfigEnum.CLOUNDINARY_CLOUD_NAME]: CLOUNDINARY_CLOUD_NAME ?? "",
  [ConfigEnum.CLOUNDINARY_API_BASE_URL]: CLOUNDINARY_API_BASE_URL ?? "",
  [ConfigEnum.CLOUNDINARY_UPLOAD_PRESET]: CLOUNDINARY_UPLOAD_PRESET ?? "",
};

console.log("BASE_URL==>", BASE_URL);

const ensureEnvVars = () => {
  const missingKeys = requiredEnv.filter(
    (requiredKey) => !_.has(Env, requiredKey) || _.isEmpty(Env[requiredKey])
  );
  if (missingKeys.length) {
    console.error("Missing environment variables ", missingKeys.join(", "));
  }
  if (config.BASE_URL?.includes("localhost")) {
    console.error("Please use your local ip instead of localhost for URLs");
  }
};
ensureEnvVars();

export { config as Config };
