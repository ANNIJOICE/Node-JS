// Creating server

const http = require('http');

http.createServer((req, res) => {
    res.write('server created')
    console.log('server created')
}).listen(3000)

// http.createServer((req, res) => {
//     res.write('server created');
//     res.end();
//     console.log("Ended")
// }).listen(3000, () => {
//     console.log('server listening')
// });
