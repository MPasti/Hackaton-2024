import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import ExerciciosCompleto from './exercicios_completo.js'
import * as relations from '@adonisjs/lucid/types/relations'

export default class Exercicio extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome:string

  @column()
  declare descricao:string

  @column()
  declare dificuldade:string

  @belongsTo(() => ExerciciosCompleto, {
    foreignKey: 'exercicioCompleto_id', // Chave estrangeira que referencia ExercicioCompleto
  })
  declare exercicioCompleto: relations.BelongsTo<typeof ExerciciosCompleto>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}