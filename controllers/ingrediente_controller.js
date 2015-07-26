var models = require('../models/models.js');

exports.index = function(req, res) {
  if (req.query.search){
    var search="%"+req.query.search.replace(" ","%")+"%";
    models.Ingrediente.findAll({where: ["nombre like ?",search]}).then(function(ingredientes){
      //ordenamos el vector
      ingredientes.sort(function(a,b){
        return (b.nombre < a.nombre)
      })
      res.render('ingredientes/index.ejs', { ingredientes: ingredientes,errors: []});
    }).catch(function(error){next(error);})
  }else{
    models.Ingrediente.findAll().then(function(ingredientes) {
      res.render('ingredientes/index.ejs', { ingredientes: ingredientes,errors: []});
    }).catch(function(error){next(error);})
  }

};

exports.new = function(req, res) {
  var ingrediente = models.Ingrediente.build(
    {nombre: "", unidad: "", proveedor: "",familia: ""}
  );

  res.render('ingredientes/new', {ingrediente: ingrediente,errors: []});
};

exports.create = function(req, res) {
  var ingrediente = models.Ingrediente.build( req.body.ingrediente );

  ingrediente
  .validate()
  .then(
    function(err){
      if (err) {
        res.render('ingredientes/new', {ingrediente: ingrediente, errors: err.errors});
      } else {
        ingrediente // save: guarda en DB campos pregunta y respuesta de quiz
        .save({fields: ["nombre", "unidad","proveedor","familia"]})
        .then( function(){ res.redirect('/ingredientes')})
      }      // res.redirect: Redirección HTTP a lista de preguntas
    }
  ).catch(function(error){next(error)});
};
