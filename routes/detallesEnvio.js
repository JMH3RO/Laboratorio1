const {Router, Router}= require('express')
const {
    getDetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios
}= require('../controllers/detallesEnvios');
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de el
const Router = Router();
//Inicializo la funcion Router
Router.get('/',getDetallesEnvios)
Router.post('/',postDetallesEnvios)
Router.put('/',putDetallesEnvios)
Router.delete('/',deleteDetallesEnvios)

module.exports = Router