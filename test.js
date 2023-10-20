const { exec } = require('child_process');
const fs = require('fs');

// Função para salvar todos os arquivos no diretório
const saveFiles = () => {
  fs.readdirSync('./').forEach(file => {
    if (fs.lstatSync(file).isFile()) {
      // Você pode personalizar isso para incluir ou excluir tipos de arquivo específicos, se necessário.
      exec(`git add ${file}`, (err, stdout, stderr) => {
        if (err) {
          console.error(`Erro ao adicionar ${file}: ${err}`);
        }
      });
    }
  });
};

// Função para automatizar o commit e push
const commitAndPush = () => {
  saveFiles();
  exec('git commit -m "Automatização de commit e push"', (err, stdout, stderr) => {
    if (err) {
      console.error(`Erro ao fazer o commit: ${err}`);
      return;
    }
    exec('git push', (err, stdout, stderr) => {
      if (err) {
        console.error(`Erro ao fazer o push: ${err}`);
        return;
      }
      console.log('Commit e push realizados com sucesso!');
    });
  });
};

// Chama a função para automatizar o commit e push
commitAndPush();
