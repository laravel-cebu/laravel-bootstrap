#Laravel Base App

This is how I pulled in some of the stufss I need.

Configure your database in your .env file.

Add this to ```composer.json``` file.
```
        "illuminate/html": "5.*",
        "laracasts/flash": "~1.3",
        "bosnadev/repositories": " 0.*",
        "chrisbjr/api-guard": "~2.0",
        "laracasts/utilities": "~2.0",
        "guzzlehttp/guzzle": "~5.0"
```

Run ```composer update``` to pull dependencies.

Add these to ```config\app.php```

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


To pull package migrations, run ```php artisan vendor:publish```.

Run migration, ```php artisan migrate:install```.

```


```

Run ```bower install``` to pull javascript libraries.

Run 