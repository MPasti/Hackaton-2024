import Admin from "#models/admin";
import type { HttpContext } from '@adonisjs/core/http'

export default class AdminController {

    public async index({ response }: HttpContext) {
      const admins = await Admin.all();
      return response.ok({ success: true, admins });
    }

    public async show({ params, response }: HttpContext) {
      const admin = await Admin.find(params.id);
  
      if (!admin) {
        return response.badRequest({ message: 'Admin não encontrado' });
      }
  
      return response.ok({ success: true, admin });
    }
  

    public async store({ request, response }: HttpContext) {
      const adminData = request.only(['id']); 
  
      try {
        const admin = await Admin.create(adminData);
        return response.created(admin);
      } catch (error) {
        return response.badRequest({ message: 'Erro ao criar o admin', error: error.message });
      }
    }
  
   
    public async update({ params, request, response }: HttpContext) {
      const admin = await Admin.find(params.id);
  
      if (!admin) {
        return response.badRequest({ message: 'Admin não encontrado' });
      }
  
      const adminData = request.only(['id']); 
  
      admin.merge(adminData);
  
      try {
        await admin.save();
        return response.ok({ success: true, admin });;
      } catch (error) {
        return response.badRequest({ message: 'Erro ao atualizar o admin', error: error.message });
      }
    }

    public async destroy({ params, response }: HttpContext) {
      const admin = await Admin.find(params.id);
  
      if (!admin) {
        return response.badRequest({ message: 'Admin não encontrado' });
      }
  
      await admin.delete();
      return response.noContent();
    }
  }