require('./models/db');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const productController = require('./controller/productController');
const employeeController = require('./controller/employeeController');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/'))

app.engine('hbs', expressHandlebars({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))

app.get('/', function (req, res) {
    res.render("home")
})
app.get('/introduction' , (req , res)=>{
    res.render('introduction');
})
app.set('view engine', 'hbs');
const PORT = process.env.PORT || ;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

app.use('/product', productController);
app.use('/employee', employeeController);