import Usuario from '#models/usuario';
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsuarioController {

  public async store({ request, response }: HttpContext) {
    const userData = request.only([
      'nome',
      'cpf',
      'data_nascimento',
      'sexo',
      'escolaridade',
      'ocupacao',
      'email',
      'senha',
      'id_monitor', 
    ]);


    userData.senha = await hash.make(userData.senha);

    try {
      const usuario = await Usuario.create(userData);
      return response.created(usuario);
    } catch (error) {
      return response.badRequest({ message: 'Erro ao criar o usuário', error });
    }
  }

 
  public async index({ response }: HttpContext) {
    const usuarios = await Usuario.all();
    return response.ok({ success: true, usuarios });
  }

 
  public async show({ params, response }: HttpContext) {
    const usuario = await Usuario.find(params.id);
    
    if (!usuario) {
      return response.badRequest({ message: 'Usuário não encontrado' });
    }

    return response.ok({ success: true, usuario });
  }

 
  public async update({ params, request, response }: HttpContext) {
    const usuario = await Usuario.find(params.id);

    if (!usuario) {
      return response.badRequest({ message: 'Usuário não encontrado' });
    }

    const userData = request.only([
      'nome',
      'cpf',
      'data_nascimento',
      'sexo',
      'escolaridade',
      'ocupacao',
      'email',
      'senha',
      'id_monitor',
    ]);

    if (userData.senha) {
      userData.senha = await hash.make(userData.senha);
    }

    usuario.merge(userData);
    
    try {
      await usuario.save();
      return response.ok({ success: true, usuario });
    } catch (error) {
      return response.badRequest({ message: 'Erro ao atualizar o usuário', error });
    }
  }

  public async destroy({ params, response }: HttpContext) {
    const usuario = await Usuario.find(params.id);

    if (!usuario) {
      return response.badRequest({ message: 'Usuário não encontrado' });
    }

    await usuario.delete();
    return response.noContent();
  }
}
