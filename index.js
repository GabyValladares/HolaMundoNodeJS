//LLAMAR AL PROTOCOLO HTTP
var htpp=require('http');
//A TRAVÉS DEL PROTOCOLO CREAMOS UN SERVIDOR Y LO ALMACENAMOS EN SERVER
var server=htpp.createServer();

//Método que me permite configurar 
function mensaje(peticion,resp){
    //1. el estado del servidor a través de un texto
    resp.writeHead(200,{'content-type':'text/plain'});
    //2. el mensaje a mostrar
    resp.write("HOLA MUNDO HERRAMIENTAS!!");
    //3.finaliza la respuesta
    resp.end();

}
//iniciar el servidor cuando exista una petición y se muestre el mensaje personalizado (Cliente)
server.on('request',mensaje);

//cada vez que escuche una petición salga por el puerto 3000 y me indique el mensaje en consola
server.listen(3000,function(){
    console.log('La aplicación está corriendo en un cliente');
})
