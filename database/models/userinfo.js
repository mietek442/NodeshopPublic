const { Model } = require("objection");
class UserInfo extends Model {
  static get tableName() {
    return "userinfo";
  }
}

module.exports = UserInfo;
