/* eslint-disable no-unused-vars */
import Env from "react-native-config";
import _ from "lodash-es";

export enum ConfigEnum {
  BASE_URL = "BASE_URL",
  REST_API_URL = "REST_API_URL",
  GRAPHQL_URL = "GRAPHQL_URL",
  SOCKET_URL = "SOCKET_URL",
  PROD = "PROD",
}

const BASE_URL = Env.PROD ? Env.BASE_URL_PROD : Env.BASE_URL_DEV;

const SOCKET_URL = Env.PROD ? Env.SOCKET_URL_PROD : Env.SOCKET_URL_DEV;

const requiredEnv = {
  [ConfigEnum.BASE_URL]: BASE_URL,
  [ConfigEnum.GRAPHQL_URL]: Env.GRAPHQL_URL,
  [ConfigEnum.SOCKET_URL]: SOCKET_URL,
};

const config = {
  ...requiredEnv,
  [ConfigEnum.REST_API_URL]: `${BASE_URL}${Env.REST_API_ENDPOINT}`,
};

const ensureEnvVars = () => {
  const missingKeys = Object.keys(requiredEnv).filter(
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
