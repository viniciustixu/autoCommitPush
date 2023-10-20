const { exec } = require('child_process');

// Comando para executar os commits e pushes
const commitAndPush = () => {
  exec('git add .', (err, stdout, stderr) => {
    if (err) {
      console.error(`Erro ao adicionar os arquivos: ${err}`);
      return;
    }
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
  });
};

// Chama a função para automatizar o commit e push
commitAndPush();
