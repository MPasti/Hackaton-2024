
import type { HttpContext } from '@adonisjs/core/http';
import Score from '#models/score';
import { DateTime } from 'luxon';

export default class ScoresController {

  public async index({ response }: HttpContext) {
    const scores = await Score.all();
    return response.ok({ success: true, scores });
  }

  public async getScoreData({ params, response }: HttpContext) {
    const { tipo } = params.tipo; 
    const usuarioId = params.usuario_id;

    try {

      const scores = await Score.query()
        .where('usuario_id', usuarioId)
        .if(tipo, (query) => query.where('tipo', tipo))
        .orderBy('dt_questionario', 'asc');

      return response.ok({ success: true, scores });
    } catch (error) {
      return response.badRequest({ message: 'Erro ao obter os dados do gráfico', error: error.message });
    }
  }
  
  public async store({ request, response }: HttpContext) {
    const scoreData = request.only(['id']); 

    // Verifica o cooldown
    const lastScore = await Score.query()
      .where('usuario_id', scoreData.id)
      .orderBy('dt_questionario', 'desc')
      .firstOrFail();

    const score = lastScore.serialize()

    const now = DateTime.now().toMillis();
    const cooldownPeriod = 7 * 24 * 60 * 60 * 1000; // 7 dias em milissegundos
    const monthCooldownPeriod = 30 * 24 * 60 * 60 * 1000; // 30 dias em milissegundos

    if (lastScore) {
      const timeSinceLastScore = now - score.dt_questionario.toMillis();
      
      if (timeSinceLastScore < cooldownPeriod) {
        return response.forbidden({ message: 'Você precisa esperar mais antes de enviar outro questionário (7 dias).' });
      }
      
      if (timeSinceLastScore < monthCooldownPeriod) {
        return response.forbidden({ message: 'Você já enviou um questionário recentemente (30 dias).' });
      }
    }

    try {
      const score = await Score.create(scoreData);
      return response.created({ success: true, message: 'Questionário enviado!', score });
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
    return response.ok({ success: true, message: 'Questionário deletado com sucesso' }); 
  }
}
