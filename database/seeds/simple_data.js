/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("opinion").del();
  await knex("productparams").del();
  await knex("products").del();
  await knex("userinfo").del();
  await knex("users").del();

  await knex("users").insert([
    {
      id: 1,
      mail: "example1@example.com",
      login: "user123",
      password: "P@ssw!ss2dds0rd!",
    },
    {
      id: 2,
      mail: "another@example.com",
      login: "coo87",
      password: "SecurePa$$",
    },
  ]);
  await knex("userinfo").insert([
    {
      id: 1,
      name: "John",
      lastname: "Doe",
      street: "Main Street",
      postcode: "12345",
      city: "Cityville",
      number: "123",
      phonenumber: "123221321",
      difrentdelivery: null,
      user_id: 1,
    },
  ]);
  await knex("products").insert([
    {
      id: 1,
      title: "Stalowa rura",
      shortdesc: "Rura stalowa o standardowych wymiarach.",
      description:
        "Rura stalowa wykonana z wysokiej jakości stali, przeznaczona do różnych zastosowań budowlanych i przemysłowych.",
      manufacture: "Fabryka Rur BogdanPaleta",
      avaiable: true,
      baseprice: 49.99,
      discount: 0.1,
      imgurl: "https://placehold.co/100",
      imgurltwo: "https://placehold.co/150",
      imgurlthree: "https://placehold.co/200",
      imgurlfour: "https://placehold.co/200",
      size: 0.1,
    },
  ]);
  await knex("productparams").insert([
    {
      id: 1,
      title: "Specyfikacja techniczna",
      parameter: "Waga",
      desc: "Waga produktu wyrażona w kilogramach.",
      infoparam:
        "Podana waga jest orientacyjna i może się nieznacznie różnić w zależności od produkcji.",
      product_id: 1,
    },
  ]);
  await knex("opinion").insert([
    {
      id: 1,
      user_id: 1,
      procuct_id: 1,
      stars: 4,
      desc: "Bardzo dobre doświadczenie z tym produktem. Polecam!",
      img: "https://placehold.co/200",
    },
  ]);
};
