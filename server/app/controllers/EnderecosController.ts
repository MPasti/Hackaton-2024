
import type { HttpContext } from '@adonisjs/core/http'
import Endereco from '#models/endereco'

export default class EnderecosController {
    
    public async index({ response }: HttpContext) {
        const endereco = await Endereco.all();
        return response.json(endereco);
      }
  
      public async show({ params, response }: HttpContext) {
        const endereco = await Endereco.find(params.id);
    
        if (!endereco) {
          return response.badRequest({ message: 'Endereço não encontrado' });
        }
    
        return response.json(endereco);
      }
    
  
      public async store({ request, response }: HttpContext) {
        const enderecoData = request.only(['id']); 
    
        try {
          const endereco = await Endereco.create(enderecoData);
          return response.created(endereco);
        } catch (error) {
          return response.badRequest({ message: 'Erro ao criar o endereço', error: error.message });
        }
      }
    
     
      public async update({ params, request, response }: HttpContext) {
        const endereco = await Endereco.find(params.id);
    
        if (!endereco) {
          return response.badRequest({ message: 'Endereço não encontrado' });
        }
    
        const enderecoData = request.only(['id']); 
    
        endereco.merge(enderecoData);
    
        try {
          await endereco.save();
          return response.json(endereco);
        } catch (error) {
          return response.badRequest({ message: 'Erro ao atualizar o endereço', error: error.message });
        }
      }
  
      public async destroy({ params, response }: HttpContext) {
        const endereco = await Endereco.find(params.id);
    
        if (!endereco) {
          return response.badRequest({ message: 'Endereço não encontrado' });
        }
    
        await endereco.delete();
        return response.noContent();
      }
}