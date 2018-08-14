
exports.up = async function(knex, Promise) {
    await knex.schema.createTable('Record',
     function (t) {
        t.increments('id_Record').unsigned().primary();
        t.string('title').notNull();
        t.string('alternative_title');
        t.string('record_label');
        t.string('location');
    })

    await knex.schema.createTable('Song',
        function (t) {
        t.increments('id_Song').unsigned().primary();
        t.string('title').notNull();
        t.string("physical_medium").notNull();
        t.string("language").notNull();

        t.integer('Record_idRecord').unsigned();
        t.foreign('Record_idRecord').references('Record.id_Record');

        t.string("year").notNull();
        t.string("genre").notNull();
        t.string("audio_sample_path").notNull();
        t.string("Band_name").notNull();

    })
};


exports.down = async function(knex, Promise) {
    await knex.schema.dropTable('Song')
    await knex.schema.dropTable('Record');
};