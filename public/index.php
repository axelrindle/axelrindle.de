<?php

// show errors
use App\Handler;

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Autoload dependencies
require_once '../vendor/autoload.php';

// Handle the incoming request
$handler = new Handler();
echo $handler->handle();