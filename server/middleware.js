const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


const compiler = webpack(webpackConfig);



module.exports = function(app, express) { 
  app.use('/', express.static(path.join(__dirname, '../client')));
     
 
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
  }));
 
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
 //might need something like this to get webpacked files
  // app.get('/dist/main.js', function(req, res) {
  //   console.log('called');
  //   res.sendFile(path.join(__dirname, ''));
  // });
  //this might need to be more like the above comment, not sure
  app.get('/', function(req, res) {
    res.send(200);
    console.log('hi from get /');
  }); 

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  
};

