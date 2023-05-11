const express = require('express');
const hbs = require('hbs')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.port || 3000;

const app = express();

app.set('view engine','hbs')
hbs.registerPartials(__dirname = 'view/partials', () => {});

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/registro',(req,res) =>{
    res.render('table-datatable-basic')
})

app.get('*',(req,res) =>{
    res.render('page-error-404')
})

app.listen(port, ()=>{
    console.log('el servidor esta conrriendo en el puerto: ', port)
})