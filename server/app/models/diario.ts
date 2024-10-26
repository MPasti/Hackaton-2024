import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'

export default class Diario extends BaseModel {
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
  declare qnt_pag:number

  @hasOne(() => Usuario, {
    foreignKey: 'id_usuario', // chave primária no modelo Usuario
  })
  declare usuario: relations.HasOne<typeof Usuario>

}