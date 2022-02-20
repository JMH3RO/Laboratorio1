const express = require('express');

class Server {
    constructor(){
        this.app = express()
        this.routes();
        }
        routes(){
            this.app.get('/precios',(req, res)=> res.send('GET Endpoint para Precios'))
            this.app.get('/precios',(req, res)=> res.send('post Endpoint para Precios'))
            this.app.get('/precios',(req, res)=> res.send('PUT Endpoint para Precios'))
            this.app.get('/precios',(req, res)=> res.send('DELETE Endpoint para Precios'))
            this.app.get('/paquetes',(req, res)=> res.send('Endpoint para Paquetes'))
        }
        listen(){
        this.app.listen(process.env.PORT,()=>
        console.log("El puerto esta corriendo en el puerto TCP"+process.env.PORT))
    }
}
module.exports = Server
