<?php

namespace Justoverclock\CountryFlags\Listeners;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

class AddCountryFlagAttributes
{
    public function __invoke(UserSerializer $serializer, User $user, array $attributes): array
    {
        $actor = $serializer->getActor();

        $attributes['countryCode'] = $user->countryCode;

        return $attributes;
    }
}
