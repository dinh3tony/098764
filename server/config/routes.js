const mongoose = require('mongoose');
var mainController = require('../controllers/mainController.js')
module.exports = function(app){
  app.get('/cakes', function(req,res){
    mainController.index(req,res);
  })
  app.post('/cake', function(req, res){
    mainController.addNew(req,res);
  })
  app.post('/comment/:id', function(req, res){
    mainController.addComment(req,res);
  })
  app.post('/edit/:id', function(req, res){
    mainController.update(req,res);
  })
  app.delete('/remove/:id', function(req, res){
    mainController.destroy(req, res);
  })
  app.get('/cake/:id', function(req, res){
    mainController.show(req, res);
  })
}
