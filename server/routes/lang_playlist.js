var express = require("express");
var router = express.Router();

var knex = require("../helpers/knex");

/* GET category listing. */
router.get("/", function(req, res) {
  // knex("Record_languages")
  //   .select()
  //   .then(function(data) {
  //     knex
  //       .from("Language")
  //       .innerJoin("accounts", "Record.id_Record", "accounts.user_id");
  //   });
  // console.log("test");
  // knex
  //   .select()
  //   .from("Language as lng")
  //   .innerJoin("Record as rec", "rec.id_Record", "lng.id_Language")
  //   .select("rec.id_Record", "lng.id_Language")
  //   .then(d => {
  //     console.log(d);
  //   });

  knex.schema
    .createTableIfNotExists("testAgg", t => {
      t.string("Record_idRecord");
      t.string("Language_idLanguage");
    })
    .then(d => {
      console.log(d);
    });

  knex
    .select()
    .from("Record_languages as lng")
    .innerJoin(
      "Record_languages as rec",
      "rec.Language_idLanguage",
      "lng.Language_idLanguage"
    )
    .select()
    .then(d => {
      d.forEach(element => {
        console.log(element);
        // knex("testAgg")
        // .insert({
        //   Record_idRecord: element.Record_idRecord,
        //   Language_idLanguage: element.Language_idLanguage
        // })
        // .then(e => console.log(e))
        // .catch(e => console.log(e));
      });
    });

  res.send("finished");
});

module.exports = router;
