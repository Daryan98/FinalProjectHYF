exports.up = async function(knex, Promise) {
  await knex.schema.createTable("Record", function(t) {
    t.increments("id_Record")
      .unsigned()
      .primary();
    t.string("title").notNull();
    t.string("alternative_title");
    t.string("record_label");
    t.string("location");
  });

  await knex.schema.createTable("Song", function(t) {
    t.increments("id_Song")
      .unsigned()
      .primary();
    t.string("title").notNull();
    t.string("physical_medium").notNull();
    t.string("language").notNull();

    t.integer("Record_idRecord").unsigned();
    t.foreign("Record_idRecord").references("Record.id_Record");

    t.string("year").notNull();
    t.string("genre").notNull();
    t.string("audio_sample_path").notNull();
    t.string("band_name").notNull();
  });

  await knex.schema.createTable("Language", function(t) {
    t.increments("id_Language")
      .unsigned()
      .primary();

    t.string("language_name")
      .notNull()
      .unique();
  });

  await knex.schema.createTable("Record_languages", function(t) {
    t.integer("Record_idRecord").unsigned();
    t.foreign("Record_idRecord").references("Record.id_Record");

    t.integer("Language_idLanguage").unsigned();
    t.foreign("Language_idLanguage").references("Language.id_Language");
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable("Record_languages");
  await knex.schema.dropTable("Language");
  await knex.schema.dropTable("Song");
  await knex.schema.dropTable("Record");
};
