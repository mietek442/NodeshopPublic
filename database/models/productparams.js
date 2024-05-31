const { Model } = require("objection");

class ProductParams extends Model {
  static get tableName() {
    return "productparams";
  }
  static get relationMappings() {
    const Channel = require("./products");
    return {
      channel: {
        relation: Model.HasManyRelation,
        modelClass: Channel,
        join: {
          from: "productparams.productId",
          to: "products.id",
        },
      },
    };
  }
}

module.exports = ProductParams;
