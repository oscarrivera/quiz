var express = require('express');
var router = express.Router();
var quizController = require ('../controllers/quiz_controller')
//Pagina de Entrada (home page)
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});
// Definición de rutas de /quizes
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/author',function (req,res){
  res.render('author',{autor:'Oscar Rivera'})
});


module.exports = router;
