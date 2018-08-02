const data = require("../data/data.json");

exports.seed = function(knex, Promise) {
  return knex('Artist').del()
    .then(function () {

      data.filter((item, i) => {
      return knex('Artist').insert([
          {id_artist: i, full_name: item.artist},
      ]);
    });
  })
};

