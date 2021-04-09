const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const fs = require('fs');

const app = express();
const ejs = require('ejs');

const PORT = process.env.PORT || 3000;

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

  let slideInfo = ['Ingeniería de Software', 'Algoritmos Evolutivos', 'Ciencia de Datos', 'Inteligencia Artificial'];

  let files = fs.readdirSync(__dirname+'/public/images')

  res.render('index', {
    pageTitle: 'Home',
    images: files,
    slideInfo: slideInfo
  })
})

app.get('/blog', (req, res) => {
  res.render('blog', {
    pageTitle: 'Mi blog'
  }) 
})

app.get('/servicios', (req, res) => {
  res.render('servicios', {
    pageTitle: 'Mis servicios'
  }) 
})

app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Pagina no encontrada'
  })
})

app.listen(PORT, () => {
  console.log('Listen on port: ', PORT);
})

