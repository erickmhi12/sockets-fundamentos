        var socket = io();

        socket.on('connect', function() {
            console.log('Conectado al servidor');
        });
        // Escuchar informacion
        socket.on('disconnect', function() {
            console.log('Pedimos conexion con el servidor');
        })

        //Enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Erick',
            mensaje: 'Hola Mundo'
        }, function(resp) {
            console.log('Respuesta del servidor: ', resp);
        });
        //Escuchar informacion
        socket.on('enviarMensaje', function(mensaje) {
            console.log('Servidor:', mensaje);
        });