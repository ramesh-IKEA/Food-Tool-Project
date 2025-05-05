const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload= require("express-fileupload");

app.disable('x-powered-by')
const options = {
  origin: ['http://localhost:3000','http://qscinfdr.cte.ingka.com','http://qscinfdr.ingka.com/'],
  methods:['GET','POST','PUT'],
  }
app.use(cors(options))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.set("view engine", "ejs");
app.set('view options', {
  layout: false
});
require ('./src/routes')(app);
app.use(fileUpload());
app.use((error, res, next) => {
  res.status(500).json({ message: error.message });
})
app.listen(process.env.NODE_LOCAL_PORT || 5000)
