exports.up = function(knex) {
    return knex.schema.createTable('facts', table => {
    table.increments('id')
    table.text('fact')
    
})  
};


exports.down = function(knex) {
    return knex.schema.dropTable('facts')

};