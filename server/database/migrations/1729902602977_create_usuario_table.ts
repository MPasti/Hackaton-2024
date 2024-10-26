import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Usuario extends BaseSchema {
  protected tableName = 'usuarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome', 255).nullable()
      table.string('cpf', 14).notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('senha', 180).notNullable()
      table.date('data_nascimento').notNullable()
      table.string('sexo', 10).notNullable()
      table.string('escolaridade', 100).notNullable()
      table.string('ocupacao', 100).notNullable()
      table.string('estado_civil', 20).notNullable()
      table.decimal('renda_mensal')
      table.integer('monitor_id').unsigned().references('id').inTable('usuarios').nullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
