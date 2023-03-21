// const http = require('http');
// const { listenerCount } = require('process');

// const server = http.createServer(function (request, response) {
//     response.end('HELLO BRO');
// });

// server.listen(3001, '127.0.0.1', '', function () {
//     console.log('server menyala...');
// });

const http = require('http');
const rupiah = require('rupiah-format');
const host = '127.0.0.1';
const port = '3002';

const server = http.createServer(function (request, response) {
    const nama = "MUHAMMAD DWI";
    let uang = 200000;
    let jajan = 40000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    const hasil = `
        <head>
            <title>${nama}</title>
        </head>
        <body>
            <h1 style = 'background: black;color: white; text-align: center; padding:20px'>NODE JS UANG JAJAN</h1>
            <p>
                Halo nama saya ${nama}. Saya jajan sebanyak ${jajan}. Uang saya tadinya ${uang}. sekarang menjadi ${sisa}
            </p>
        </body>`


    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, "", function () {
    console.log(`server menyala di ${host}:${port}`);
});