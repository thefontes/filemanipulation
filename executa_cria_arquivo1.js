var fs = require('fs');

fs.appendFile('arquivo1.txt', 'Meu conteudo!\n', function (erro){
    if (erro) throw erro;
    console.log('Arquivo Salvo!');
});

//fs.appendeFile() adiciona o conteúdo no fim do arquivo.