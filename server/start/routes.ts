/* eslint-disable prettier/prettier */
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/UsuarioController')
const AdminController = () => import('#controllers/AdminController')
const DiariosController = () => import('#controllers/DiariosController')
const EnderecosController = () => import('#controllers/EnderecosController')
const ExercicioController = () => import('#controllers/ExercicioController')
const ExerciciosCompletoController = () => import('#controllers/ExerciciosCompletoController')
const PaginasController = () => import('#controllers/PaginasController')
const ScoresController = () => import('#controllers/ScoresController')
const SessionController = () => import('#controllers/SessionController')
const StreakController = () => import('#controllers/StreakController')

// Rota para a página inicial (opcional)
router.get('/', async () => {
  return { message: 'Bem-vindo à API!' };
});

// Grupo de rotas com prefixo /api
router.group(() => {
  router.get('usuarios', [UsersController, 'index']);     
  router.get('usuarios/:id', [UsersController, 'show']);  
  router.post('usuarios', [UsersController, 'store']);      
  router.put('usuarios/:id', [UsersController, 'update']);   
  router.delete('usuarios/:id', [UsersController, 'destroy']); 

  router.get('admin', [AdminController, 'index']);     
  router.get('admin/:id', [AdminController, 'show']);  
  router.post('admin', [AdminController, 'store']);      
  router.put('admin/:id', [AdminController, 'update']);   
  router.delete('admin/:id', [AdminController, 'destroy']); 

  router.get('endereco', [EnderecosController, 'index']);     
  router.get('endereco/:id', [EnderecosController, 'show']);  
  router.post('endereco', [EnderecosController, 'store']);      
  router.put('endereco/:id', [EnderecosController, 'update']);   
  router.delete('endereco/:id', [EnderecosController, 'destroy']); 

  router.get('diario', [DiariosController, 'index']);     
  router.get('diario/:id', [DiariosController, 'show']);  
  router.post('diario', [DiariosController, 'store']);      
  router.put('diario/:id', [DiariosController, 'update']);   
  router.delete('diario/:id', [DiariosController, 'destroy']); 

  router.get('score', [ScoresController, 'index']);     
  router.get('score/:id', [ScoresController, 'getScoreData']);  
  router.post('score', [ScoresController, 'store']);      
  router.put('score/:id', [ScoresController, 'update']);   
  router.delete('score/:id', [ScoresController, 'destroy']); 

  router.get('streak', [StreakController, 'index']);     
  router.get('streak/:id', [StreakController, 'show']);  
  router.post('streak', [StreakController, 'store']);      
  router.put('streak/:id', [StreakController, 'update']);   
  router.delete('streak/:id', [StreakController, 'destroy']); 

  router.get('exercicio', [ExercicioController, 'index']);     
  router.get('exercicio/:id', [ExercicioController, 'show']);  
  router.post('exercicio', [ExercicioController, 'store']);      
  router.put('exercicio/:id', [ExercicioController, 'update']);   
  router.delete('exercicio/:id', [ExercicioController, 'destroy']); 

  router.get('exercicio_completo', [ExerciciosCompletoController, 'index']);     
  router.get('exercicio_completo/:id', [ExerciciosCompletoController, 'show']);  
  router.post('exercicio_completo', [ExerciciosCompletoController, 'store']);      
  router.put('exercicio_completo/:id', [ExerciciosCompletoController, 'update']);   
  router.delete('exercicio_completo/:id', [ExerciciosCompletoController, 'destroy']); 

  router.get('pagina', [PaginasController, 'index']);     
  router.get('pagina/:id', [PaginasController, 'show']);  
  router.post('pagina', [PaginasController, 'store']);      
  router.put('pagina/:id', [PaginasController, 'update']);   
  router.delete('pagina/:id', [PaginasController, 'destroy']); 
}).prefix('api');
