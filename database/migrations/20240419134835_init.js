/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments().primary();
      table.string("mail").unique().notNullable();
      table.string("login").unique().notNullable();
      table.string("password").notNullable();
      table.timestamps(true, true);
    })
    .createTable("personalinfo", (table) => {
      table.increments();
      table.string("name");
      table.string("lastname");
      table.string("street");
      table.string("postcode");
      table.string("city");
      table.string("number");
      table.string("phonenumber");
      table.string("difrentdelivery");
      table
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      table.timestamps(true, true);
    })
    .createTable("productparams", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("parameter").notNullable();
      table.string("desc").notNullable();
      table.string("infoparam").notNullable(); // explain about parameter
      table.timestamps(true, true);
    })

    .createTable("products", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("shortdesc").notNullable();
      table.string("description");
      table.string("manufacture");

      table.string("avaiable").notNullable();
      table.float("baseprice").notNullable();
      table.float("discount");
      table.string("imgurl");
      table.string("imgurltwo");
      table.string("imgurlthree");
      table.string("imgurlfour");
      table
        .integer("paramId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("productparams");
      table.string("size");

      table.timestamps(true, true);
    })
    .createTable("opinion", (table) => {
      table.increments("id").primary();
      table
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      table
        .integer("procuctId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("products");
      table.integer("stars").notNullable();
      table.string("desc").notNullable();
      table.string("infoparam").notNullable(); // explain about parameter
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("personalinfo")
    .dropTableIfExists("productparams")
    .dropTableIfExists("opinion")
    .dropTableIfExists("products");
};
