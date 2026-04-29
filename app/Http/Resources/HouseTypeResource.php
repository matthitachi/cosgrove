<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HouseTypeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'             => $this->id,
            'name'           => $this->name,
            'slug'           => $this->slug,
            'beds'           => $this->beds,
            'baths'          => $this->baths,
            'area'           => $this->area,
            'price'          => $this->price,
            'sort_order'     => $this->sort_order,
            'description'    => $this->description,
            'surface_area'   => $this->surface_area,
            'parking_spaces' => $this->parking_spaces,
            'maids_quarters' => $this->maids_quarters,
            'living_rooms'   => $this->living_rooms,
            'hero_image'    => $this->getFirstMediaUrl('hero'),
            'thumbnail'     => $this->getFirstMediaUrl('thumbnail'),
            'gallery'       => $this->getMedia('gallery')->map(fn ($m) => [
                'url'  => $m->getUrl(),
                'name' => $m->name,
            ]),
            'floorplan_url' => $this->getFirstMediaUrl('floorplan'),
        ];
    }
}
