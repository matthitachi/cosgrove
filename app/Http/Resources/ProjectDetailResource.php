<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class ProjectDetailResource extends ProjectResource
{
    public function toArray(Request $request): array
    {
        return array_merge(parent::toArray($request), [
            'description' => $this->description,
            'gallery'     => $this->getMedia('gallery')->map(fn ($m) => [
                'url'   => $m->getUrl('card'),
                'thumb' => $m->getUrl('thumb'),
                'name'  => $m->name,
            ]),
            'house_types' => HouseTypeResource::collection($this->whenLoaded('houseTypes')),
            'brochures'   => ProjectBrochureResource::collection($this->whenLoaded('brochures')),
        ]);
    }
}
