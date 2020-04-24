const { io } = require('../server');
io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.emit('enviar-mensaje', {

        user: 'admin',
        message: 'Bienvenido'

    });


    client.on('enviar-mensaje', (data, callback) => {
        console.log(data);


        client.broadcast.emit('enviar-mensaje', data);


        // if (data.usuario) {
        //     callback('Todo salio bien');

        // } else {
        //     callback('Todo salio mal');
        // }

    });
});