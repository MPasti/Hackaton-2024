import { BaseSeeder } from '@adonisjs/lucid/seeders'

import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import Usuario from '#models/usuario'

export default class UsuarioAdminSeeder extends BaseSeeder {
  public async run() {
    await Usuario.create({
      nome: 'Admin',
      cpf: '00000000000',
      data_nascimento: DateTime.now(),
      sexo: 'M',
      escolaridade: 'NI',
      ocupacao: 'Administrador',
      email: 'admin@happiology.com',
      senha: await hash.make('123456'),
      renda_mensal: 0,
      estado_civil: 'NI',
    })
  }
}
