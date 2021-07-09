const express = require("express");
const Router =  require("./Router");

const server = express();

const PORT = process.env.PORT || 5000;

server.use("/api/v1", Router);

server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
