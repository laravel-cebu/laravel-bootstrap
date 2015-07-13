var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

	/* 
     * All your styles
     */
    mix.styles([
        "../js/bower_components/bootstrap/dist/css/bootstrap.min.css",
        "../js/bower_components/font-awesome/css/font-awesome.min.css", // Font Awesome
        "main.css" // contains your general styles
    ]);

    /* 
     * General JS Libraries Needed for each page 
     */
    mix.scripts([
        "/bower_components/jQuery/dist/jquery.min.js",
        "/bower_components/bootstrap/dist/js/bootstrap.min.js",
        "/bower_components/angular/angular.min.js",
        "/bower_components/angular-resource/angular-resource.min.js",
        "/bower_components/angular-bootstrap/ui-bootstrap.min.js",
        "/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
        "/bower_components/moment/moment.js",
        "/bower_components/momentjs/min/locales.min.js", 
        "/bower_components/angular-filter/dist/angular-filter.min.js",
        "main.js" // contains your general scripts
    ],'public/js/general.js');


    /*
     * All your angular scripts
     */
    mix.scripts([

    	/* Your Main Angular File */
        // "/angular/main.js",

        /* Your Controllers */
        // "/angular/controllers/[Your Controller].js",

        /* Your Services */
        // "/angular/services/[your service].js",

        /* Your Factories */
        // "/angular/services/[your factory].js",

    ],'public/js/scripts.js');
});
