const data = require("../data/data.json");

let Record = [];
let Song = [];
let Band_has_artist = [];
let Artist = [];
let Band = [];


data.filter((item, i) => {
   Record.push({
    idRecord: i+1,
    title: item.title,
    alternative_title: item.alternativeTitle,
    record_label: "",
    location: "",
  
  });
   Song.push({
     idSong: i+1, 
     title: item.title,
     physical_medium: item.physical,
     language: "",
     songcol: "" ,
    //  Record_idRecord: Record.map(item => item.idRecord),
    //  Band_has_artist_band_idBand: i+1,
    //  Band_has_artist_band_idArtist: i+1,
     year: item.year,
     genre: "",
    });
    
    // Band_has_artist.push({
    //   Band_idBand: i+1,
    //   Artist_idArtist: i+1,
    // });

    Artist.push({
      id_Artist: i+1,
      full_name: item.artist,
    });
    
    Band.push({
      id_Band: i+1,
      name: item.band,
    })
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
  // await knex('Band_has_artist').del()
  //   .then(function () {
  //     return knex('Band_has_artist').insert(Band_has_artist);
  // })
  await knex('Artist').del()
    .then(function () {
      return knex('Artist').insert(Artist);
  })
  await knex('Band').del()
    .then(function () {
      return knex('Song').insert(Band);
  })
  
};

