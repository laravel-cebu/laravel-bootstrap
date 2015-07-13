#Laravel(5.1) Base App + Angular


Please fork and contribute to enhance the structure. 

You can also suggest packages so that we can directly dive into code with this code base.

### Used Packages
- Laracast Flash
- HTML by Illuminate - for managing forms
- Repositories - yes, you don't need to write these.
- Api Guard - need an API on the fly? Cheers to these.
- Javascript to Php - by Laracasts
- Guzzle - we can't sent emails without this package.

### Bower Dependencies
- jQuery
- Bootstrap 3.*
- Font Awesome
- Angular
- Angular Bootstrap
- Angular Resource
- Angular Filter
- Moment


## INSTRUCTIONS
1. Run ```composer update``` to pull package dependencies.
2. Add these to ```config\app.php```

    Providers
    ```
        'Zizaco\Entrust\EntrustServiceProvider',
        'Laracasts\Flash\FlashServiceProvider',
        'Laracasts\Utilities\JavaScript\JavascriptServiceProvider',
        'Chrisbjr\ApiGuard\Providers\ApiGuardServiceProvider'
    ```
    Aliases
    ```
        'Entrust'   => 'Zizaco\Entrust\EntrustFacade',
        'Flash'     => 'Laracasts\Flash\Flash',
        'JavaScript'=> 'Laracasts\Utilities\JavaScript\JavaScriptFacade'
    ```
    
3. Run ```php artisan vendor:publish && php artisan entrust:migration``` to pull package migrations.
4. Run ```php artisan migrate:install && php artisan migrate```
5. Run ```bower install``` to pull javascript libraries.
6. Use Laravel Elixir by running ```npm install```. Use ```sudo``` for super user.
7. Run ```gulp``` or ```gulp watch```.
8. Include ```public/css/all.css```, ```public/js/general.js``` and ```public/js/scripts.js``` on the templates you want to include the files.
9. Finally run ```composer dump-autoload -o```, just to have a clean build.





