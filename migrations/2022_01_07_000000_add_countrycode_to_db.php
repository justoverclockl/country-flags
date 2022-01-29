<?php

use Flarum\Database\Migration;


return Migration::addColumns('users', [
    'countryCode' => ['type' => 'text']
]);

