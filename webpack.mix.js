// jshint ignore: start
/* eslint-disable */
const mix = require('laravel-mix');

mix.autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
   });

mix.js([
    'src/js/homePageScripts.js',
    'src/js/libs.js',
    'src/js/main.js',
    ], './app.js');



mix.sass('src/scss/index.scss', './index.css');


