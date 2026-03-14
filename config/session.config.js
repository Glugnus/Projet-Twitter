const app = require("../app");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;

app.use(
  session({
    secret: "je suis un secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
    store: new MongoStore({
      mongoUrl:
        "mongodb+srv://Aurel:1234@cluster0.0qmbppq.mongodb.net/twitter?appName=Cluster0",
      ttl: 60 * 60 * 24 * 14,
    }),
  }),
);
