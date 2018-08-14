const data = require("../data/data.json");

let Record = [];
let Song = [];


data.forEach((item, i) => {

   Record.push({
    id_Record: i+1,
    title: item.title,
    alternative_title: item.alternativeTitle,
    record_label: item.label,
    location: item.location || "unknown",
  
  });
  // let Record_is = Record.find(recordId => {
  //   return recordId.id_Record == item.Record;
  // });

     item.tracks.all.forEach(songTitle => {
      Song.push({
        id_Song: Song.length + 1, 
        title: songTitle,
        physical_medium: item.physical,
        language: "" || "unkown",
        Record_idRecord:  Record[i].id_Record, 
        year: item.year,
        genre: "" || "unkown",
        audio_sample_path: "" || "unkown",
        Band_name: "" || "unkown",
       });
     })
  
});

 exports.seed = async function(knex, Promise) {
  await knex('Record').del()
  await knex('Record').insert(Record);

   await knex('Song').del()
   await knex('Song').insert(Song);
};

