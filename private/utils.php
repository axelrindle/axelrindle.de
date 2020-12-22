<?php

use Carbon\Carbon;

/**
 * @return bool Whether it's xmas time.
 */
function isXmas(): bool
{
	$begin = Carbon::create(null, 12);
	$now = Carbon::now();
	$end = Carbon::create($now->year + 1, 1);
	return $begin->lessThanOrEqualTo($now) && $end->greaterThanOrEqualTo($now);
}
