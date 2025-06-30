const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res) => {
    const homePageHTML = `
    <style>
            .body {
            background-color: lightgrey;
            background-size: cover; /* Isso garante que a imagem de fundo cubra todo o elemento */
            background-repeat: no-repeat; /* Evita repetição da imagem de fundo */
            background-position: center; /* Centraliza a imagem de fundo */
          }  
    </style>
      <!DOCTYPE html>
      <html lang="pt-br">
      <title>Integração Funcional!!</title>
      <head>
      Deploy Automatizado com ARGOCD🚀🚀🚀
      <br>APLICAÇÃO TESTE HEALTH CHECK!!test🚀🚀🚀🚀
      </head>
    <body>
        <script>
        alert("🚀🚀🚀🚀🚀🚀")
        </script>
      </body>
      <footer>
      Footer da page!!
      </footer>
    </html>`;
    res.send(homePageHTML);
     });


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});