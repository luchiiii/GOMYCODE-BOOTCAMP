const http = require("http");
const app = require("./app");
const envVariables = require("./config/index");
const httpServer = http.createServer(app);

const PORT = envVariables.PORT;

const startServer = async () => {
  httpServer.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
};

startServer();
