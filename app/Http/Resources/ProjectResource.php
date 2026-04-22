<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'               => $this->id,
            'name'             => $this->name,
            'slug'             => $this->slug,
            'location'         => $this->location,
            'status'           => $this->status,
            'show_in_home'     => $this->show_in_home,
            'sort_order'       => $this->sort_order,
            'hero_image'       => $this->getFirstMediaUrl('hero', 'card'),
            'hero_thumb'       => $this->getFirstMediaUrl('hero', 'thumb'),
            'description'      => $this->description,
            'meta_title'       => $this->meta_title ?: $this->name,
            'meta_description' => $this->meta_description,
            'updated_at'       => $this->updated_at,
        ];
    }
}
