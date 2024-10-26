
import type { HttpContext } from '@adonisjs/core/http';
import Exercicio from '#models/exercicio';

export default class ExercicioController {

  public async index({ response }: HttpContext) {
    const exercicio = await Exercicio.all();
    return response.ok({ success: true, exercicio });
  }

 
  public async show({ params, response }: HttpContext) {
    const exercicio = await Exercicio.find(params.id);

    if (!exercicio) {
      return response.badRequest({ message: 'Exercicio não encontrado' });
    }

    return response.ok({ success: true, exercicio });
  }

  
  public async store({ request, response }: HttpContext) {
    const exercicioData = request.only(['id']); 

    try {
      const exercicio = await Exercicio.create(exercicioData);
      return response.created(exercicio);
    } catch (error) {
      return response.badRequest({ message: 'Erro ao criar o exercicio', error: error.message });
    }
  }


  public async update({ params, request, response }: HttpContext) {
    const exercicio = await Exercicio.find(params.id);

    if (!exercicio) {
      return response.badRequest({ message: 'Exercicio não encontrado' });
    }

    const exercicioData = request.only(['id']); 

    exercicio.merge(exercicioData);

    try {
      await exercicio.save();
      return response.ok({ success: true, exercicio });
    } catch (error) {
      return response.badRequest({ message: 'Erro ao atualizar o streak', error: error.message });
    }
  }


  public async destroy({ params, response }: HttpContext) {
    const exercicio = await Exercicio.find(params.id);

    if (!exercicio) {
      return response.badRequest({ message: 'Exercicio não encontrado' });
    }

    await exercicio.delete();
    return response.noContent(); 
  }
}
