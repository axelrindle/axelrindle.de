<?php

namespace App;

use AltoRouter;
use Exception;
use Twig_Environment;
use Twig_Loader_Filesystem;
use Twig_SimpleFunction;

/**
 * Helper class to do the necessary request handling.
 *
 * @package App
 */
class Handler
{
    private $router;
    private $twig_loader;
    private $twig_env;

    /**
     * Handler constructor.
     * @throws Exception
     */
    function __construct()
    {
        // create instances
        $this->router = new AltoRouter();
        $this->twig_loader = new Twig_Loader_Filesystem('../views');
        $this->twig_env = new Twig_Environment($this->twig_loader);

        // add custom filters
        $this->registerFilters();

        // map routes
        $this->mapRoutes();
    }

    private function registerFilters()
    {
        // asset shortcut helper
        $this->twig_env->addFunction(new Twig_SimpleFunction('asset', function ($path) {
            return '/assets/' . $path;
        }));
    }

    /**
     * @throws Exception
     */
    private function mapRoutes()
    {
        $render = function ($path = 'index') {
            $template = $this->twig_env->load($path . '.twig');
            return $template->render();
        };
        $this->router->map('GET', '/', $render);
        $this->router->map('GET', '/[a:path]?/', $render);
    }

    /**
     * @return string The compiled template.
     */
    function handle()
    {
        // Match!
        $match = $this->router->match();
        if ($match) {
            return call_user_func_array($match['target'], $match['params']);
        } else {
            return '404';
        }
    }
}