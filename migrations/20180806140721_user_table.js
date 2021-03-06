
exports.up = function(knex, Promise) {
 return knex.schema.createTable('users', tbl=> {
     tbl.increments();
     tbl.string('username').notNullable();
     tbl.string('password').notNullable();
     tbl.string('createdAt')
 })
 };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
