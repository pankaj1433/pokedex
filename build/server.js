const app =  require('express')();
const path = require('path');
const middleware = require('webpack-dev-middleware');
const webpackconfig = require('../webpack.config');
const webpack = require('webpack');

const compiler = webpack(webpackconfig);

app.use(middleware(compiler,{
    hot: true,
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true
}));
// const PORT = process.env.PORT || 3003;

app.get('/*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(process.env.PORT || 3003 , (req, res)=>{
    console.log("App is Up");
});