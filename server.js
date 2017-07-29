const express = require('express');

const app = express();
const path = require('path');

const viewPath = path.join(__dirname, '/views');
app.set('port', process.env.PORT || 8080);

//setting view engine as ejs template
app.set('view engine', 'ejs');

//setting views location
app.set('views', viewPath);

//serving static files
app.use(express.static(path.join(__dirname, '/public')))

//Loading all routes
app.use(require(path.join(__dirname, 'routes', 'home.js')));

console.log(path.join(__dirname, '/public'));






















var server = app.listen(app.get('port'), () => {
    console.log(`server started at ${app.get('port')}`);
})