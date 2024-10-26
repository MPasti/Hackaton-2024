
import type { HttpContext } from '@adonisjs/core/http';
import Streak from '#models/streak';

export default class StreakController {

  public async index({ response }: HttpContext) {
    const streak = await Streak.all();
    return response.ok({ success: true, streak });
  }

 
  public async show({ params, response }: HttpContext) {
    const streak = await Streak.find(params.id);

    if (!streak) {
      return response.badRequest({ message: 'Streak não encontrado' });
    }

    return response.ok({ success: true, streak });
  }

  
  public async store({ request, response }: HttpContext) {
    const streakData = request.only(['id']); 

    try {
      const streak = await Streak.create(streakData);
      return response.created(streak);
    } catch (error) {
      return response.badRequest({ message: 'Erro ao criar o streak', error: error.message });
    }
  }


  public async update({ params, request, response }: HttpContext) {
    const streak = await Streak.find(params.id);

    if (!streak) {
      return response.badRequest({ message: 'Streak não encontrado' });
    }

    const streakData = request.only(['id']); 

    streak.merge(streakData);

    try {
      await streak.save();
      return response.ok({ success: true, streak });
    } catch (error) {
      return response.badRequest({ message: 'Erro ao atualizar o streak', error: error.message });
    }
  }


  public async destroy({ params, response }: HttpContext) {
    const streak = await Streak.find(params.id);

    if (!streak) {
      return response.badRequest({ message: 'Streak não encontrado' });
    }

    await streak.delete();
    return response.noContent(); 
  }
}
