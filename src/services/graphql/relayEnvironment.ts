import { Environment, RecordSource, Store } from "relay-runtime";
import {
  authMiddleware,
  RelayNetworkLayer,
  urlMiddleware,
  MiddlewareNextFn,
  RelayRequestAny,
  errorMiddleware,
  loggerMiddleware,
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
        const token =
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdGFydE9aZXJvLmNvbSIsImF1ZCI6InN0YXJ0T1plcm91c2VyIiwic3ViIjoiNjBlYjA0NTgyMGRiNTFlNDllZTU0YzNkIiwiaWF0IjoxNjI2MDE0ODA5LCJleHAiOjE2Mjg2MDY4MDksInBybSI6IjE0OGY3MDQwZjgwNTNlYzgyZWUxNTQ1MWYwOGFiZTI3YTY1YjY2ZTlkZTI3Mzg4ZTQyZGRjZjczMGQ5MTVmODRjMTczM2ZmNjMxNjIzMTdlNmEyNzg1MTI4MzEwN2Y4NzJmYzhhM2RiY2IzMDg3ZjM2Nzk1MzQ2MDUyNGQxMjhmIn0.jJ4UEayoqauPL4gvo_tTw6m9eWVYOVhyZ4SJdAwo4EdWXFNtN7dsp9QYpfgcfDL88_4DNC8H4o98keH2Tqbjmg";
        // Todo replace the token get logic using context
        return token;
      },
      prefix: "Bearer ",
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
