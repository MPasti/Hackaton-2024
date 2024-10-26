import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'exercicios_completos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('dt_completo').notNullable()

      table.integer('usuario_id').unsigned().references('id').inTable('usuarios').nullable()
      table.integer('exercicio_id').unsigned().references('id').inTable('exercicios').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
