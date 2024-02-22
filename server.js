const express = require("express");
//k1
const app = express();
const mysql = require("mysql");
const Token = require("crypto").randomBytes(64).toString("hex");
const cors = require("cors");
app.use(express.json());
var cookieSession = require("cookie-session");
const PORT = process.env.PORT || 80;

app.set("trust proxy", 1);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.set("trust proxy", 1);
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.listen(3002, () => {
  console.log("server is run in 3002");
});
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "", // tylko w xamp jak jest
  database: "mojabaza",
});
// register
const registerRoute = require("./controlers/register");
app.use("/register", registerRoute);
// login
const loginRoute = require("./controlers/login");
app.use("/login", loginRoute);
//wylogowanie sie
const logoutRoute = require("./controlers/logout");
app.use("/logout", logoutRoute);
// zwracanie danych
const returndataRoute = require("./controlers/returndata");
app.use("/returndata", returndataRoute);
//generowanie tokenu do zmiany hasła
const GenerateresetpassRoute = require("./controlers/generateresetpass");
app.use("/generateresetpass", GenerateresetpassRoute);
//resetowania hasła
const ResetPassRoute = require("./controlers/ResetPass");
app.use("/ResetPass", ResetPassRoute);
//zmienienie podstawowych własności
const changeSRoute = require("./controlers/changeSimpleValues");
app.use("/changeSValue", changeSRoute);
