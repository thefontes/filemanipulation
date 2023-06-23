//Excluir arquivos
var fs = require('fs');

fs.unlink('arquivo2.txt', function (erro){
    if (erro) throw erro;
    console.log('Arquivo Excluido!');
});
//fs.unlink() exclui arquivo.