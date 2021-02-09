## Criando projeto NodeJS

- execute o comando `npm init -y` na raiz do projeto. 
ele deve lhe fornecer um `'package.json'` que contem as versão das bibliotecas node.

- Agora execute execute `npm install express` apos a execucao do comando note que no arquivo 
`'package.json' ` foi adicionado a refenrecia do express com a ultima versão.

- Para execucao automatica do servidor execute o comando  `npm install -D nodemon` e adicione a linha ` "dev": 'nodemon NOME_ARQUIVO_SERVIDOR.js'` 
no arquivo `package.json` no nó `scripts`

- basta executar no terminal `npm run dev` eo nodemon executa o arquivo especificado em seu parametro.

