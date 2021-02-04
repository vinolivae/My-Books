const express = require('express');
const bodyParser = require('body-parser');
const routerBook = require('./Routes/book_routes');
const routerCategory = require('./Routes/category_routes');
const Category = require('./Models/category');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books', routerBook);
app.use('/categories', routerCategory);


app.listen(port, ()=>{
    console.log(`running in http://localhost:${port}`)
});
