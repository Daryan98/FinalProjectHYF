
exports.up = function(knex, Promise) {
   return knex.schema.createTable('Artist',
     function (t) {
        t.increments('id_artist').unsigned().primary();
        t.string('full_name').notNull();
    });  
};

exports.down = function(knex, Promise) {
   return knex.dropTable('Artist'); 
};
