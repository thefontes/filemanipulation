//Renomear arquivo
var fs = require('fs');

fs.rename('arquivo3.txt', 'arquivo_33.txt', function (erro){
    if (erro) throw erro;
    console.log('Arquivo Renomeado!');
});