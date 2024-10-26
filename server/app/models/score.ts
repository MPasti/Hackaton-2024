import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Usuario from '#models/usuario'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Score extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => Usuario, {
    foreignKey: 'id_usuario',
  })
  declare profile: relations.HasOne<typeof Usuario>

  @column()
  declare pontuacao: number

  @column()
  declare tipo: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
