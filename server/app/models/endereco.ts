import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Endereco extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cep: number | null

  @column()
  declare cidade: string

  @column()
  declare estado: string

  @column()
  declare bairro: string

  @column()
  declare numero: string

  @column()
  declare complemento: string | null

  @column()
  declare logradouro: string

  @column()
  declare usuario_id: number 

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Usuario, {
    foreignKey: 'usuario_id', // Chave estrangeira no Endereco que referencia Usuario
  })
  declare usuario: relations.BelongsTo<typeof Usuario>
}
