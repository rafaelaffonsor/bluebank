Execução do projeto:

Após clone, baixar dependências. (npm install).
Verificar se seu servidor mongo está sendo executado. (mongod)
Executar migration. (node ./node_modules/mongodb-migrate -runmm -dbc '{ "host":"localhost","db":"bluebank","port":27017}' up)
Executar aplicação. (nodemon ou node server.js)

Aplicação disponível em localhost:3000

Abs,
Rafael Affonso
