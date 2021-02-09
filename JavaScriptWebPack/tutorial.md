###### Passo 1 


Na raiz do projeto executar os comando:

- `yarn init`
- `yarn add @babel/cli`
- `yarn add @babel/preset-env`
- `yarn add @babel/core`

Após isso ele ira cirar o arquivo 'yarn.lock' que nunca vamos precisar mexer.

E tambem criara a pasta 'node_modules' que armazena todas as dependencias do projeto.

Apos isso se estiver utilizando GIT e uma boa hora para criar o arquivo .gitignore


###### Criando arquivo de configuracao babel

- criar arquivo '.babelrc' e adicionar o seguinte codigo 

`{
  "presets": ["@babel/preset-env"]
}`

###### Configurando transformacao do arquivo js

- Adicionar um nó no arquivo package.json 

`{
    "scripts" :
    {
      "dev" : "babel main.js  -o .bundle.js"
    }
}`


- o arquivo vai ficar parecido com 


````
{
   "name": "JavaScriptWebPack",
   "version": "1.0.0",
   "main": "index.js",
   "license": "MIT",
   "dependencies": 
   {
     "@babel/cli": "^7.6.0"
   },
 {
   "scripts" :
   {
     "dev" : "babel main.js  -o bundle.js"
 
   }
   }
````

Agora e so executar o comando `yarn dev` ele deve alterar tudo feito no aquivo main.js para o bundle.js

###### Configurando webpack.config.js
````
module.exports ={
    entry:'./main.js',
    output:{
        path: __dirname,
        filename: 'bundle.js',
    },
    module:{
        rules:[
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader:    'babel-loader',
                    }
                }
         ],
    },
};
````
###### Configurando package.json (webpack)

````
{
  "name": "JavaScriptWebPack",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "@babel/cli": "^7.6.0",
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "babel-loader": "^8.0.6",
    "webpack": "^4.39.3",
    "webpack-cli": "^3.3.8"
  },
  "scripts": {
    "dev" : "webpack --mode=development"
  }
}
````




