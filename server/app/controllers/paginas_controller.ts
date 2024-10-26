// import type { HttpContext } from '@adonisjs/core/http'
import type { HttpContext } from '@adonisjs/core/http'
import Pagina from '#models/pagina';

export default class PaginasController {
    
    public async index({ response }: HttpContext) {
        const pagina = await Pagina.all();
        return response.json(pagina);
      }
  
      public async show({ params, response }: HttpContext) {
        const pagina = await Pagina.find(params.id);
    
        if (!pagina) {
          return response.badRequest({ message: 'Página não encontrada' });
        }
    
        return response.json(pagina);
      }
    
  
      public async store({ request, response }: HttpContext) {
        const paginaData = request.only(['id']); 
    
        try {
          const pagina = await Pagina.create(paginaData);
          return response.created(pagina);
        } catch (error) {
          return response.badRequest({ message: 'Erro ao criar a página', error: error.message });
        }
      }
    
     
      public async update({ params, request, response }: HttpContext) {
        const pagina = await Pagina.find(params.id);
    
        if (!pagina) {
          return response.badRequest({ message: 'Página não encontrada' });
        }
    
        const enderecoData = request.only(['id']); 
    
        pagina.merge(enderecoData);
    
        try {
          await pagina.save();
          return response.json(pagina);
        } catch (error) {
          return response.badRequest({ message: 'Erro ao atualizar a página', error: error.message });
        }
      }
  
      public async destroy({ params, response }: HttpContext) {
        const pagina = await Pagina.find(params.id);
    
        if (!pagina) {
          return response.badRequest({ message: 'Pagina não encontrada' });
        }
    
        await pagina.delete();
        return response.noContent();
      }
}