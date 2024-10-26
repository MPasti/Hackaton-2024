
import type { HttpContext } from '@adonisjs/core/http';
import ExerciciosCompleto from '#models/exercicios_completo';

export default class ExerciciosCompletoController {

  public async index({ response }: HttpContext) {
    const exercicios_completo = await ExerciciosCompleto.all();
    return response.ok({ success: true, exercicios_completo });
  }

 
  public async show({ params, response }: HttpContext) {
    const exercicios_completo = await ExerciciosCompleto.find(params.id);

    if (!exercicios_completo) {
      return response.badRequest({ message: 'Exercicio não encontrado' });
    }

    return response.ok({ success: true, exercicios_completo });
  }

  
  public async store({ request, response }: HttpContext) {
    const exercicios_completoData = request.only(['id']); 

    try {
      const exercicios_completo = await ExerciciosCompleto.create(exercicios_completoData);
      return response.created(exercicios_completo);
    } catch (error) {
      return response.badRequest({ message: 'Erro ao criar o exercicio', error: error.message });
    }
  }


  public async update({ params, request, response }: HttpContext) {
    const exercicios_completo = await ExerciciosCompleto.find(params.id);

    if (!exercicios_completo) {
      return response.badRequest({ message: 'Exercicio não encontrado' });
    }

    const exercicios_completoData = request.only(['id']); 

    exercicios_completo.merge(exercicios_completoData);

    try {
      await exercicios_completo.save();
      return response.ok({ success: true, exercicios_completo });
    } catch (error) {
      return response.badRequest({ message: 'Erro ao atualizar o streak', error: error.message });
    }
  }


  public async destroy({ params, response }: HttpContext) {
    const exercicios_completo = await ExerciciosCompleto.find(params.id);

    if (!exercicios_completo) {
      return response.badRequest({ message: 'Exercicio não encontrado' });
    }

    await exercicios_completo.delete();
    return response.noContent(); 
  }
}
