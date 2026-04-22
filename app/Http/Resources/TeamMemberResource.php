<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamMemberResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'           => $this->id,
            'name'         => $this->name,
            'position'     => $this->position,
            'bio'          => $this->bio,
            'bio_extended' => $this->bio_extended,
            'sort_order'   => $this->sort_order,
            'photo_url'    => $this->getFirstMediaUrl('photo', 'profile'),
            'photo_thumb'  => $this->getFirstMediaUrl('photo', 'thumb'),
        ];
    }
}
