var http = require('http')

http.createServer((req, res) => {
    res.end('Ola!');
}).listen(9898);

console.log('Servidor rodando!');