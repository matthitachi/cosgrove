<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HouseTypeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'           => $this->id,
            'name'         => $this->name,
            'slug'         => $this->slug,
            'beds'         => $this->beds,
            'baths'        => $this->baths,
            'area'         => $this->area,
            'price'        => $this->price,
            'sort_order'   => $this->sort_order,
            'images'       => $this->getMedia('images')->map(fn ($m) => [
                'url'   => $m->getUrl('card'),
                'thumb' => $m->getUrl('thumb'),
            ]),
            'floorplan_url' => $this->getFirstMediaUrl('floorplan'),
        ];
    }
}
