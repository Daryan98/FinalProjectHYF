var express = require("express");
var router = express.Router();

var knex = require("../helpers/knex");

/* GET category listing. */
router.get("/", async function(req, res) {
  let data;
  let jsonResult = new Object();
  let languages_table = await knex("Language");
  let records_table = await knex("Record");
  let langs_records = await knex("Record_languages").distinct(
    "Language_idLanguage"
  );

  for (let i = 0; i < langs_records.length; i++) {
    const lang = langs_records[i];
    let records = await knex({ rl: "Record_languages" })
      .select("Record_idRecord")
      .where({ "rl.Language_idLanguage": lang.Language_idLanguage });
    let language = languages_table.filter(
      l => l.id_Language == lang.Language_idLanguage
    )[0];

    let record_ids = [];
    records.forEach(rec => {
      record_ids.push(rec.Record_idRecord);
    });

    let record = records_table.filter(r => record_ids.includes(r.id_Record));
    jsonResult[language.language_name] = record;
  }

  res.send(jsonResult);
});

module.exports = router;
