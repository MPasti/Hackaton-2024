import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Usuario from './usuario.js';
import * as relations from '@adonisjs/lucid/types/relations'
import Exercicio from './exercicio.js';

export default class ExerciciosCompleto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare dt_completo:DateTime

  @belongsTo(() => Usuario, {
    foreignKey: 'usuario_id', // Chave estrangeira que referencia Usuario
  })
  declare usuario: relations.BelongsTo<typeof Usuario>;

  @hasMany(() => Exercicio, {
    foreignKey: 'exercicio_id', // Chave estrangeira na tabela Exercicio
  })
  declare exercicios: relations.HasMany<typeof Exercicio>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}