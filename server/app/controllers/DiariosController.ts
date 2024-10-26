
import Diario from "#models/diario";
import type { HttpContext } from '@adonisjs/core/http'

export default class DiariosController {
    public async index({ response }: HttpContext) {
        const diario = await Diario.all();
        return response.ok({ success: true, diario });
      }
  
      public async show({ params, response }: HttpContext) {
        const diario = await Diario.find(params.id);
    
        if (!diario) {
          return response.badRequest({ message: 'Diario não encontrado' });
        }
    
        return response.ok({ success: true, diario });
      }
    
  
      public async store({ request, response }: HttpContext) {
        const diarioData = request.only(['id']); 
    
        try {
          const diario = await Diario.create(diarioData);
          return response.created(diario);
        } catch (error) {
          return response.badRequest({ message: 'Erro ao criar o diario', error: error.message });
        }
      }
    
     
      public async update({ params, request, response }: HttpContext) {
        const diario = await Diario.find(params.id);
    
        if (!diario) {
          return response.badRequest({ message: 'Diario não encontrado' });
        }
    
        const diarioData = request.only(['id']); 
    
        diario.merge(diarioData);
    
        try {
          await diario.save();
          return response.ok({ success: true, diario });
        } catch (error) {
          return response.badRequest({ message: 'Erro ao atualizar o diario', error: error.message });
        }
      }
  
      public async destroy({ params, response }: HttpContext) {
        const diario = await Diario.find(params.id);
    
        if (!diario) {
          return response.badRequest({ message: 'Diario não encontrado' });
        }
    
        await diario.delete();
        return response.noContent();
      }
}