
import type { HttpContext } from '@adonisjs/core/http';
import Score from '#models/score';

export default class ScoresController {

  public async index({ response }: HttpContext) {
    const scores = await Score.all();
    return response.ok({ success: true, scores });
  }

 
  public async show({ params, response }: HttpContext) {
    const score = await Score.find(params.id);

    if (!score) {
      return response.badRequest({ message: 'Score não encontrado' });
    }

    return response.ok({ success: true, score });
  }

  
  public async store({ request, response }: HttpContext) {
    const scoreData = request.only(['id']); 

    try {
      const score = await Score.create(scoreData);
      return response.created(score);
    } catch (error) {
      return response.badRequest({ message: 'Erro ao criar o score', error: error.message });
    }
  }


  public async update({ params, request, response }: HttpContext) {
    const score = await Score.find(params.id);

    if (!score) {
      return response.badRequest({ message: 'Score não encontrado' });
    }

    const scoreData = request.only(['id']); 

    score.merge(scoreData);

    try {
      await score.save();
      return response.ok({ success: true, score });
    } catch (error) {
      return response.badRequest({ message: 'Erro ao atualizar o score', error: error.message });
    }
  }


  public async destroy({ params, response }: HttpContext) {
    const score = await Score.find(params.id);

    if (!score) {
      return response.badRequest({ message: 'Score não encontrado' });
    }

    await score.delete();
    return response.noContent(); 
  }
}
