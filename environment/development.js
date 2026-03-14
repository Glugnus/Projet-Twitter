const path = require("path");

module.exports = {
  dbUrl:
    "mongodb+srv://Aurel:1234@cluster0.0qmbppq.mongodb.net/twitter?appName=Cluster0",
  cert: path.join(__dirname, "../ssl/local.crt"),
  key: path.join(__dirname, "../ssl/local.key"),
};
