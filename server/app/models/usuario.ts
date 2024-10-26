import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasOne, hasMany } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import * as relations from '@adonisjs/lucid/types/relations'
import Diario from './diario.js'
import Streak from './streak.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class Usuario extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string | null

  @column()
  declare cpf: string

  @column()
  declare data_nascimento: DateTime

  @column()
  declare sexo: string

  @column()
  declare escolaridade: string

  @column()
  declare ocupacao: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare senha: string

  @column()
  declare id_monitor: number | null

  @hasOne(() => Usuario, {
    foreignKey: 'id',
    localKey: 'id_monitor',
  })
  declare monitor: relations.HasOne<typeof Usuario>

  @hasMany(() => Usuario, {
    foreignKey: 'id_monitor',
  })
  declare monitorados: relations.HasMany<typeof Usuario>

  @hasOne(() => Diario, {
    foreignKey: 'id_diario',
  })
  declare diario: relations.HasOne<typeof Diario>

  @hasOne(() => Streak, {
    foreignKey: 'id_streak',
  })
  declare streak: relations.HasOne<typeof Streak>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(Usuario, {
    expiresIn: '30 days', // duração do token
    prefix: 'oat_', // prefixo do token
    table: 'auth_access_tokens', // tabela para armazenar tokens
  })
}
