import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Diario from './diario.js'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Pagina extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
  @column()
  declare nome:string

  @column()
  declare dt_criacao:DateTime
  @column()
  declare diario_id: number; // Chave estrangeira

  @belongsTo(() => Diario, {
    foreignKey: 'diario_id', // Chave estrangeira na tabela Pagina
  })
  declare diario: relations.BelongsTo<typeof Diario>;
}