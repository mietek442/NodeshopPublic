const { Model } = require("objection");

class UserInfo extends Model {
  static get tableName() {
    return "userinfo";
  }
  static get relationMappings() {
    const User = require("./user");
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "userinfo.userId", // or .user_id
          to: "user.id",
        },
      },
    };
  }
}

module.exports = UserInfo;
