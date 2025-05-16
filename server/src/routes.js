var Case = require('../routes/cases');
var Article = require('../routes/articles');
var Auth = require('../routes/auth');
var GenerateFiles = require('../routes/generateFile');

module.exports = (app) => {
    app.use('/api/case/', Case);
    app.use('/api/article/', Article);
    app.use('/api/auth/', Auth);
    app.use('/api/generate/', GenerateFiles);
    app.use('/api/check',function(req,res,next){
        console.log('hello')
        res.send({'status':'ok'});
        
    });
}