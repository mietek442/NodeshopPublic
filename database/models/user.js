const { Model } = require("objection");
class User extends Model {
  static get tableName() {
    return "user";
  }
  static get relationMappings() {
    const UserInfo = require("./userinfo");
    return {
      userifno: {
        relation: Model.HasManyRelation,
        modelClass: UserInfo,
        join: {
          from: "user.id",
          to: "userinfo.userId",
        },
      },
    };
  }
}
module.exports = User;
