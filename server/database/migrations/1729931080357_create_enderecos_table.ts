import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'endereco'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('cep').nullable()
      table.string('cidade').notNullable()
      table.string('estado').notNullable()
      table.string('bairro').notNullable()
      table.string('numero').notNullable()
      table.string('complemento').nullable()
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios').nullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
