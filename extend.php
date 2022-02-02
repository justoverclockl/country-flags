<?php

/*
 * This file is part of justoverclock/country-flags.
 *
 * Copyright (c) 2021 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\CountryFlags;

use Flarum\Settings\Event\Serializing;
use Justoverclock\CountryFlags\Listeners\SaveCountryCodeToDatabase;
use Justoverclock\CountryFlags\Listeners\AddCountryFlagAttributes;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Flarum\User\Event\Saving;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Event())
        ->listen(Saving::class, SaveCountryCodeToDatabase::class),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(AddCountryFlagAttributes::class),
];
