// const express = require("express");
// const app = express();
// const expressHbs = require("express-handlebars");

// app.listen(8000, () => {
//     console.log("Application started and Listening on port 3000");
// });

// app.engine('.hbs', expressHbs.engine({extname: "hbs", defaultLayout: 'index', layoutsDir: "views/"}));
// app.set('view engine', '.hbs');
// app.set('views', './views');


// app.get('handlebars', function(req, res){
//     res.render('index');
// })


const express = require('express')
const expressHbs = require('express-handlebars');
const app = express()

app.engine('.hbs', expressHbs.engine({extname: "hbs", defaultLayout: 'index', layoutsDir: "views/"}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('index');
});
const port = 8000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})