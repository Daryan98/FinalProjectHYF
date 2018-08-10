
exports.up = async function(knex, Promise) {
    await knex.schema.createTable('Record',
     function (t) {
        t.increments('id_record').unsigned().primary();
        t.string('title').notNull();
        t.string('alternative_title').notNull();
        t.string('record_label').notNull();
        t.string('location').notNull();

    })
    await knex.schema.createTable('Song',
        function (t) {
        t.increments('idSong').unsigned().primary();
        t.string('title').notNull();
        t.string("physical_medium").notNull();
        t.string("language").notNull();
        t.string("songcol").notNull();

        t.foreign('Record_idRecord').references('Record.id_record');
        t.foreign('Band_has_artist_band_id_band').references('Band_has_artist.Band_idBand');
        t.foreign('Band_has_artist_artist_id_artist').references('Record.Artist_idArtist');


        // t.integer('Record_idRecord').unsigned().notNullable().references('idRecord').inTable('Record');
        // t.integer('Band_has_artist_band_id_band').unsigned().notNullable().references('Band_idBand').inTable('Band_has_artist');
        // t.integer('Band_has_artist_artist_id_artist').unsigned().notNullable().references('Artist_idArtist').inTable('Band_has_artist');
        t.string("year").notNull();
        t.string("genre").notNull();
    })

    await knex.schema.createTable('Band_has_artist',
        function (t) {
        t.integer('Band_idBand').unsigned().notNullable().references('id_Band').inTable('Band');
        t.integer('Artist_idArtist').unsigned().notNullable().references('id_Artist').inTable('Artist')
    })
    await knex.schema.createTable('Artist',
        function (t) {
        t.increments("id_Artist").unsigned().primary();
        t.string("full_name").notNull();
    })
    await knex.schema.createTable('Band',
        function (t) {
        t.increments("id_Band").unsigned().primary();
        t.string("name").notNull();
    })
};


exports.down = async function(knex, Promise) {
    await knex.dropTable('Record');
    await knex.dropTable('Song')
    await knex.dropTable('Band_has_artist');
    await knex.dropTable('Artist');
    await knex.dropTable('Band');
};