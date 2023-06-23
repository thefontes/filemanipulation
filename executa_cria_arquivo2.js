var fs = require('fs');
fs.open('arquivo2.txt', 'w', function (erro, file){
    if (erro) throw erro;
    console.log('Arquivo Salvo!');
});
// fs.open() abre o arquivo para gravação.