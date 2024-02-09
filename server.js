const { defineConfig } = require("@vue/cli-service");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureServer(app) {
    app.use(
      "/api",
      createProxyMiddleware({
        target: "http://localhost:5000",
        changeOrigin: true,
      })
    );
  },
});