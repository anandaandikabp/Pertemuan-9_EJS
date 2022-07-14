// const fs = require('fs');
// const http = require('http');
// const port = 3000;

// const halHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('file not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     })
// }

// http
//     .createServer((req, res) => {
//     const url = req.url;
//     console.log(url);
//     // res.writeHead(200, {
//     //     'Content-Type' : 'text/html',
//     // });   

//     if (url === '/about') {
//         halHTML('./about.html', res);
//     } else if (url === '/contact') {
//         halHTML('./contact.html', res);
//     } else {
//         halHTML('./index.html', res);
//     }    
//     })
//     .listen(port, () => {
//         console.log(`server is listening port ${port}`);
//     });

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    cont = [
        {
            name: 'Andika',
            email: 'andika@mail.com',
        },
        {
            name: 'Alya',
            email: 'alya@mail.com',
        },
        {
            name: 'Melani',
            email: 'melani@mail.com',
        },
    ]
    res.render('index', 
    {
        nama: 'Alya',
        title: 'Webserver EJS',
        cont,
    });
});

app.get('/about', (req, res) => {
    res.render('./about.html', {root: __dirname});
});

app.get('/contact', (req, res) => {
    res.render('./contact.html', {root: __dirname});
});

app.get('/product/:id?', (req, res) => {
    res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.status(404)
    res.send('Not Found 404')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

