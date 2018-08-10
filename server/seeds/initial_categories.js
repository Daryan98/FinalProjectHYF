const data = require("../data/data.json");

let Record = [];
let Song = [];
let Band_has_artist = [];
let Artist = [];
let Band = [];


data.filter((item, i) => {
   Record.push({
    id_record: i*1,
    title: item.title,
    alternative_title: item.alternativeTitle,
    record_label: "",
    location: "",
  
  });

  Artist.push({
    id_Artist: i*4,
    full_name: item.artist,
  });
  
  Band.push({
    id_Band: i*3,
    name: item.band,
  })

  
  Band_has_artist.push({
    Band_idBand: Band[i].id_Band,
    Artist_idArtist: Artist[i].id_Artist,
  });

   Song.push({
     idSong: i*2, 
     title: item.title,
     physical_medium: item.physical,
     language: "",
     songcol: "" ,
     Record_idRecord: Record[i].id_record,
     Band_has_artist_band_id_band: Band_has_artist[i].Band_idBand,
     Band_has_artist_artist_id_artist: Band_has_artist[i].Artist_idArtist,
     year: item.year,
     genre: "",
    });
    

});

 exports.seed = async function(knex, Promise) {
  await knex('Record').del()
    .then(function () {
      return knex('Record').insert(Record);
  })
  await knex('Song').del()
    .then(function () {
      return knex('Song').insert(Song);
  })
  await knex('Band_has_artist').del()
    .then(function () {
      return knex('Band_has_artist').insert(Band_has_artist);
  })
  await knex('Artist').del()
    .then(function () {
      return knex('Artist').insert(Artist);
  })
  await knex('Band').del()
    .then(function () {
      return knex('Song').insert(Band);
  })
  
};

