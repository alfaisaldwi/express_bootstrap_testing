import express, { query } from "express";
const app = express();
const port = 3000;
import expressEjsLayouts from "express-ejs-layouts";
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
app.get('/', (req,res) => {
    // res.render('halo');
    const accounts = [{
        name : 'alex',
        email : 'alex@ymail.com',
        phoneNumber : '08951252112'
    },
    {
        name : 'dwi',
        email : 'dwi@ymail.com',
        phoneNumber : '08951252112'
    },
    {
        name : 'al',
        email : 'alex@ymail.com',
        phoneNumber : '08951252112'
    },
    {
        name : 'wii',
        email : 'wii@ymail.com',
        phoneNumber : '08951252112'
    },]

    // res.sendFile('./views/index.html',{ root: __dirname});
    res.render('index', { accounts ,layout : 'layouts/main-layout',title : 'Homepage'});
});

app.get('/about', (req,res) => {
    res.render('about', { layout : 'layouts/main-layout',title : 'Homepage'});
});

app.get('/login', (req,res) => {
    res.send('Login Page');
});

app.get('/users', (req,res) => {
    res.status(200);
    // res.send('List Users');
    res.json([{
        'name' : 'alex',
        'email' : 'alex@ymail.com',
        age : 21
    }])
});

app.get('/users/:id', (req,res) => {
    res.status(200);
    // res.send('List Users');
    //http://localhost:3000/users/2?address=kapetakan
    res.json([{
        'id': req.params.id,
        'name' : 'alex',
        'email' : 'alex@ymail.com',
        age : 21
    },
    {
        'id': req.params.id,
        'name' : 'dwi',
        'email' : 'alex@ymail.com',
        age : 21,
        'address' : req.query.address
    },

    ])
});


app.use('/', (req, res) => {
    const result = res.status(404);
    res.send(`<h1> ${result.statusCode} ${result.statusMessage} </h1>`);
})

app.listen(port,()=>{
    console.log(`Listening localhost port ${port}`)
})