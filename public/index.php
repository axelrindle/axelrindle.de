<?php

use App\Handler;

// Autoload dependencies
require_once '../vendor/autoload.php';

// Handle the incoming request
$handler = new Handler();
echo $handler->handle();
