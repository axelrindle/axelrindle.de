<?php

// Autoload dependencies
require_once '../vendor/autoload.php';
use Pug\Pug;

// Create a router
$router = new AltoRouter();

// Create a pug instance
$pug = new Pug(array(
    'basedir' => '../views',
    'cache' => '../cache'
));
$pug->share('asset', function ($path) {
    return '/assets/' . $path;
});

// Map routes
$render = function ($path = 'index') {
    global $pug;
    return $pug->renderFile(sprintf('%s.pug', $path));
};
$router->map('GET', '/', $render);
$router->map('GET', '/[a:path]?/', $render);

// Match!
$match = $router->match();
if ($match) {
    echo call_user_func_array($match['target'], $match['params']);
} else {
    echo '404';
}