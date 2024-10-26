import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Streak extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare count: number

  @column()
  declare dt_ultimo_streak: DateTime

  @hasOne(() => Usuario, {
    foreignKey: 'id_usuario', // chave primária no modelo Usuario
  })
  declare usuario: relations.HasOne<typeof Usuario>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}