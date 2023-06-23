var eventos = require('events');
var eventoEmissor = new eventos.EventEmitter();

//Cria uma função para manipular o evento:
var meuManipuladorEventos = function (){
    console.log('Eu escutei um grito!');
}

//Atribui o manipulador de eventos a um evento:
eventoEmissor.on('grito', meuManipuladorEventos);

//Dispara o evento 'grito':
eventoEmissor.emit('grito');