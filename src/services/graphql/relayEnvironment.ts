import { Environment, RecordSource, Store } from "relay-runtime";
import {
  authMiddleware,
  errorMiddleware,
  RelayNetworkLayer,
  urlMiddleware,
  loggerMiddleware,
  MiddlewareNextFn,
  RelayRequestAny,
} from "react-relay-network-modern";
import { Config } from "src/constants/config";

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
      token: () => {
        // Todo replace the token get logic using context
        return "Bearer Token";
      },
      prefix: "",
    }),
    __DEV__ ? loggerMiddleware() : null,
    __DEV__ ? errorMiddleware() : null,
    errorHandlerMiddleware,
  ],
  {}
);

const store = new Store(new RecordSource());

export const relayEnvironment = new Environment({
  network,
  store,
});
