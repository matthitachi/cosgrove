<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageDetailResource extends JsonResource
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
            'sections'         => $this->whenLoaded('sections',
                                      fn () => $this->sections->map(fn ($section) => [
                                          'id'         => $section->id,
                                          'type'       => $section->type,
                                          'label'      => $section->label,
                                          'data'       => $section->data ?? [],
                                          'sort_order' => $section->sort_order,
                                          'is_active'  => $section->is_active,
                                          'image_url'  => $this->getSectionImageUrl($section->label),
                                      ])
                                  ),
        ];
    }
}
