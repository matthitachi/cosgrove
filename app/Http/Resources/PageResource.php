<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'               => $this->id,
            'title'            => $this->title,
            'slug'             => $this->slug,
            'template'         => $this->template,
            'status'           => $this->status,
            'sort_order'       => $this->sort_order,
            'meta_title'       => $this->meta_title ?? $this->title,
            'meta_description' => $this->meta_description,
        ];
    }
}
