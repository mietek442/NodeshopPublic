const express = require("express");
//k1
const app = express();
const mysql = require("mysql");
const Token = require("crypto").randomBytes(64).toString("hex");
const cors = require("cors");
const router = require("express").Router();
app.use(express.json());
// const swaggerDocument = require("./swagger.json");
var cookieSession = require("cookie-session");
const PORT = process.env.PORT || 3002;
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: "1.0.1",
    },
  },
  apis: ["server.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /login:
 *   post:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */

app.set("trust proxy", 1);
app.use(
  cors({
    origin: "http://localhost:3000", // Pozwala na żądania tylko z tego źródła
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Domyślnie, ale możesz to dostosować
    // allowedHeaders: "*", // Pozwala na wszystkie nagłówki
    credentials: true, // Pozwala na wysyłanie ciasteczek / nagłówków uwierzytelniających
  })
);

app.set("trust proxy", 1);
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "key2"],
  })
);

app.listen(8802, () => {
  console.log("server is run in 3002");
});

// register
const registerRoute = require("./controlers/register");
app.use("/register", registerRoute);
// login
const loginRoute = require("./controlers/login");
app.use("/login", loginRoute);
/**
 * @swagger
 * /login:
 *   post:
 *     description: Login
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
//wylogowanie sie
const logoutRoute = require("./controlers/logout");
app.use("/logout", logoutRoute);
/**
 * @swagger
 * /logout:
 *   post:
 *     description: logut
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
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
const { info } = require("console");
const { title } = require("process");
const { version } = require("os");
app.use("/changeSValue", changeSRoute);
