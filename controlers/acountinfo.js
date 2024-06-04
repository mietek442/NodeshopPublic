const express = require("express");
require("dotenv").config();
const router = express.Router();
const app = express();
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
app.use(express.json());
const User = require("../database/models/user");
const UserInfo = require("../database/models/userinfo");
const db = require("../config/database");
// app.use(cors());

const dotenv = require("dotenv");
const session = require("express-session");
var cookieSession = require("cookie-session");
const { stringify } = require("querystring");
function JwtVerfiy(datatovervify) {
  return jwt.verify(
    datatovervify,
    process.env.JWTPASS,
    (err, dekodettocken) => {
      return dekodettocken;
    }
  );
}

router.get("/", async (req, res, next) => {
  const { id } = req.params;

  var productParams = await UserInfo.query()
    .findById(1)
    .withGraphFetched("user");
  console.log(productParams);

  res.json(productParams);
});
module.exports = router;
