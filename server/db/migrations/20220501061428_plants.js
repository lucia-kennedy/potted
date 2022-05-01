exports.up = function(knex) {
    return knex.schema.createTable('plants', table => {
    table.increments('id')
    table.string('name')
    table.string('price')
    table.string('image')
})  
};


exports.down = function(knex) {
    return knex.schema.dropTable('plants')

};
