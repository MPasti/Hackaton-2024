import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, hasMany } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'
import Pagina from './pagina.js'

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
    foreignKey: 'usuario_id', // chave primária no modelo Usuario
  })
  declare usuario: relations.HasOne<typeof Usuario>

  @hasMany(() => Pagina, {
    foreignKey: 'diario_id', // Chave estrangeira na tabela Pagina
  })
  declare paginas: relations.HasMany<typeof Pagina>;

}