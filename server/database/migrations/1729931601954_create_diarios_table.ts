import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'diarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.date('dt_criacao').notNullable()
      table.integer('qtd_pag').nullable()

      table.integer('usuario_id').unsigned().references('id').inTable('usuarios').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
