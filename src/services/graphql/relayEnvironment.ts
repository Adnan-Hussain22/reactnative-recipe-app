import { Environment, RecordSource, Store } from "relay-runtime";
import {
  authMiddleware,
  RelayNetworkLayer,
  urlMiddleware,
  MiddlewareNextFn,
  RelayRequestAny,
} from "react-relay-network-modern";
import { Config } from "src/constants/config";
import { StorageService } from "src/services/storage";

const { GRAPHQL_URL } = Config;

const errorHandlerMiddleware =
  (next: MiddlewareNextFn) => async (req: RelayRequestAny) => {
    const resFromFetch = await next(req);
    if (resFromFetch.errors && resFromFetch.errors.length) {
      throw new Error(resFromFetch.errors[0].message);
    }
    return resFromFetch;
  };

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: GRAPHQL_URL,
    }),

    authMiddleware({
      token: async () => {
        const tokens = await StorageService.getToken();
        return tokens?.accessToken ?? "";
      },
      prefix: "Bearer ",
    }),
    errorHandlerMiddleware,
  ],
  {}
);

const store = new Store(new RecordSource());

export const relayEnvironment = new Environment({
  network,
  store,
});
