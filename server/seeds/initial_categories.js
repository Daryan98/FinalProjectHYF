const data = require("../data/data.json");

let Record = [];
let Song = [];
let Language = [];

let record_lang = [];

data.forEach((item, i) => {
  Record.push({
    id_Record: i + 1,
    title: item.title,
    alternative_title: item.alternativeTitle,
    record_label: item.label,
    location: item.location || "unknown"
  });

  item.tracks.all.forEach(songTitle => {
    Song.push({
      id_Song: Song.length + 1,
      title: songTitle,
      physical_medium: item.physical,
      language: "" || "unkown",
      Record_idRecord: Record[i].id_Record,
      year: item.year,
      genre: "" || "unkown",
      audio_sample_path: "" || "unkown",
      band_name: "" || "unkown"
    });
  });

  if (item.language)
    item.language.forEach((lang, j) => {
      let langobject = Alllanguages(lang);

      record_lang.push({
        Record_idRecord: Record[i].id_Record,
        Language_idLanguage: langobject.id_Language
      });
    });
});

function Alllanguages(Newlang) {
  let language = Language.find(lang => lang.language_name === Newlang);
  if (language) return language;

  let langObj = {
    id_Language: Language.length + 1,
    language_name: Newlang
  };

  Language.push(langObj);

  return langObj;
}

exports.seed = async function(knex, Promise) {
  await knex("Record").del();
  await knex("Record").insert(Record);
  await knex("Song").del();
  await knex("Song").insert(Song);

  await knex("Language").del();
  await knex("Language").insert(Language);

  await knex("Record_languages").del();
  await knex("Record_languages").insert(record_lang);
};
