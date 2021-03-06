import Knex from 'knex';

export async function up(Knex: Knex) {
    return Knex.schema.createTable('classes', table => {
        table.increments('id');
        table.string('subject').notNullable()
        table.decimal('cost').notNullable();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('classes');
}