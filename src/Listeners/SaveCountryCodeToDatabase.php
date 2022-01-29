<?php

namespace Justoverclock\CountryFlags\Listeners;

use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

class SaveCountryCodeToDatabase
{
    public function handle(Saving $event)
    {
        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $isSelf = $actor->id === $user->id;
        $canEdit = $actor->can('edit', $user);
        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['countryCode'])) {
            if (!$isSelf) {
                $actor->assertPermission($canEdit);
            }
            $user->countryCode = $attributes['countryCode'];
            $user->save();
        }
    }
}
