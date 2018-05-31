const app =  require('express')();
const path = require('path');
const middleware = require('webpack-dev-middleware');
const webpackconfig = require('../webpack.config');
const webpack = require('webpack');

const conmpiler = webpack(webpackconfig);

app.use(middleware(conmpiler,{
    hot: true,
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true
}));

app.get('/', (req, res)=> {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen('3003', (req, res)=>{
    console.log("App is Up");
});