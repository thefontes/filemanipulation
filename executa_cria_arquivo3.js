var fs = require('fs');
fs.writeFile('arquivo3.txt', 'Meu conteúdo\n', function (erro, file){
    if (erro) throw erro;
    console.log('Arquivo Salvo!');
});
// fs.writeFile() subistitui o conteudo no arquivo.