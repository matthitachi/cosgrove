<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PressArticleResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'             => $this->id,
            'headline'       => $this->headline,
            'publication'    => $this->publication,
            'published_date' => $this->published_date?->format('M d, Y'),
            'external_url'   => $this->external_url,
            'sort_order'     => $this->sort_order,
        ];
    }
}
