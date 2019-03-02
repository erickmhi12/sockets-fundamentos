const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'administrator',
        mensaje: 'Bienvenido a esta aplicacion'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el client

    client.on('enviarMensaje', (data, callback) => {


        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio Bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio MAL'
        //     });
        // }


    });

})