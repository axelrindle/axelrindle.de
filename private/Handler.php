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
	private AltoRouter $router;
	private Twig_Loader_Filesystem $twig_loader;
	private Twig_Environment $twig_env;

	/**
	 * Handler constructor.
	 * @throws Exception
	 */
	public function __construct()
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

	private function registerFilters(): void
	{
		// asset shortcut helper
		$this->twig_env->addFunction(new Twig_SimpleFunction('asset', function ($path) {
			return '/assets/' . $path;
		}));
		$this->twig_env->addFunction(new Twig_SimpleFunction('isXmas', function () {
			return isXmas();
		}));
	}

	/**
	 * @throws Exception
	 */
	private function mapRoutes(): void
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
	public function handle(): string
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
