/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'


router.group(() => {
  router.get('/usuarios', 'usuarios_controller.index');     
  router.get('/usuarios/:id', 'usuarios_controller.show');  
  router.post('/usuarios', 'usuarios_controller.store');      
  router.put('/usuarios/:id', 'usuarios_controller.update');   
  router.delete('/usuarios/:id', 'usuarios_controller.destroy'); 
}).prefix('/api'); 

router.group(() => {
  router.get('/admin', 'admin_controller.index');     
  router.get('/admin/:id', 'admin_controller.show');  
  router.post('/admin', 'admin_controller.store');      
  router.put('/admin/:id', 'admin_controller.update');   
  router.delete('/admin/:id', 'admin_controller.destroy'); 
}).prefix('/api'); 

router.group(() => {
  router.get('/endereco', 'enderecos_controller.index');     
  router.get('/endereco/:id', 'enderecos_controller.show');  
  router.post('/endereco', 'enderecos_controller.store');      
  router.put('/endereco/:id', 'enderecos_controller.update');   
  router.delete('/endereco/:id', 'enderecos_controller.destroy'); 
}).prefix('/api'); 

router.group(() => {
  router.get('/diario', 'diarios_controller.index');     
  router.get('/diario/:id', 'diarios_controller.show');  
  router.post('/diario', 'diarios_controller.store');      
  router.put('/diario/:id', 'diarios_controller.update');   
  router.delete('/diario/:id', 'diarios_controller.destroy'); 
}).prefix('/api'); 

router.group(() => {
  router.get('/score', 'scores_controller.index');     
  router.get('/score/:id', 'scores_controller.show');  
  router.post('/score', 'scores_controller.store');      
  router.put('/score/:id', 'scores_controller.update');   
  router.delete('/score/:id', 'scores_controller.destroy'); 
}).prefix('/api'); 

router.group(() => {
  router.get('/streak', 'streaks_controller.index');     
  router.get('/streak/:id', 'streaks_controller.show');  
  router.post('/streak', 'streaks_controller.store');      
  router.put('/streak/:id', 'streaks_controller.update');   
  router.delete('/streak/:id', 'streaks_controller.destroy'); 
}).prefix('/api'); 

router.group(() => {
  router.get('/exercicio', 'exercicios_controller.index');     
  router.get('/exercicio/:id', 'exercicios_controller.show');  
  router.post('/exercicio', 'exercicios_controller.store');      
  router.put('/exercicio/:id', 'exercicios_controller.update');   
  router.delete('/exercicio/:id', 'exercicios_controller.destroy'); 
}).prefix('/api'); 

router.group(() => {
  router.get('/exercicio_completo', 'exercicio_completos_controller.index');     
  router.get('/exercicio/:id', 'exercicio_completos_controller.show');  
  router.post('/exercicio', 'exercicio_completos_controller.store');      
  router.put('/exercicio/:id', 'exercicio_completos_controller.update');   
  router.delete('/exercicio/:id', 'exercicio_completos_controller.destroy'); 
}).prefix('/api'); 

router.group(() => {
  router.get('/pagina', 'paginas_controller.index');     
  router.get('/pagina/:id', 'paginas_controller.show');  
  router.post('/pagina', 'paginas_controller.store');      
  router.put('/pagina/:id', 'paginas_controller.update');   
  router.delete('/pagina/:id', 'paginas_controller.destroy'); 
}).prefix('/api'); 