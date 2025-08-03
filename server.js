
const http = require('http');
const data = require('./data');

const server = http.createServer((req, res) => {
res.setHeader('Content-Type', 'text/html');
let htmlResponse = `
<html>
<head>
<title>${data.title}</title>
</head>
<body>
<h1>${data.subtitle}</h1>
<p>${data.description}</p>
</body>
</html>
`;
res.end(htmlResponse);
});

server.listen(3000, () => {
console.log('Servidor corriendo en http://localhost:3000');
});