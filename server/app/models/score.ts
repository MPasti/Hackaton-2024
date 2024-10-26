import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Usuario from '#models/usuario'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Score extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Usuario, {
    foreignKey: 'usuario_id',
  })
  declare profile: relations.HasOne<typeof Usuario>

  @column()
  declare quantidade: number

  @column()
  declare tipo: string

  @column()
  declare dt_questionario: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
