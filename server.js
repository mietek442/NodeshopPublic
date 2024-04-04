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
  failOnErrors: true,
  swaggerDefinition: {
    info: {
      title: "NodeShop",
      version: "1.0.1",
    },
  },
  apis: ["server.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.set("trust proxy", 1);
app.use(
  cors({
    origin: "http://localhost:8802", // Pozwala na żądania tylko z tego źródła
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
  console.log("server is run in 8802");
});

// register

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register new acount.
 *     parameters:
 *       - in: body
 *         name: token
 *         schema:
 *           type: object
 *           properties:
 *            UserName:
 *              type: string
 *              required: true
 *            Email:
 *              type: string
 *              required: true
 *            Password:
 *              type: string
 *              required: true
 *
 *         description: Access token.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *             example:
 *               data: "Przykładowe dane"
 *     responses:
 *       '200':
 *         description: User added
 *       '400':
 *         description: user already exists <br>Please write corect Mail<br> Password must contains over 8 characters<br> pass is to simply add either !-? or CAPITAL LETTER or a 123..
 *       '500':
 *         description: Internal Server Error
 *
 */
const registerRoute = require("./controlers/register");
app.use("/register", registerRoute);
// login
const loginRoute = require("./controlers/login");
// działą to pod spodem
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login User.
 *     parameters:
 *       - in: body
 *         name: token
 *         schema:
 *           type: object
 *           properties:
 *            LoginMai:
 *              type: string
 *              required: true
 *            LoginPassword:
 *              type: string
 *              required: true
 *
 *         description: Access token.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *             example:
 *               data: "Przykładowe dane"
 *     responses:
 *       '200':
 *         description: User Logged
 *       '400':
 *         description: not login <br> Please write corect Mail <br> Password can not be null
 *       '500':
 *         description: Internal Server Error
 *
 */

app.use("/login", loginRoute);

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
