// eslint-disable-next-line no-undef
module.exports = {
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  // [Important!!!]: Need relay-config lib that will allow relay-compiler to read this config file
  language: "typescript",
  src: "./src",
  artifactDirectory: "./src/services/graphql/__generated__",
  schema: "./src/services/graphql/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  extensions: ["js", "jsx", "ts", "tsx"],
};
