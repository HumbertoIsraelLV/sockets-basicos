var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion');
})

socket.emit('enviar-mensaje', {
    usuario: 'Hum',
    message: 'Hola servidor!'
}, function(res) {
    console.log(res);
});

socket.on('enviar-mensaje', function(men) {
    console.log(men);
})