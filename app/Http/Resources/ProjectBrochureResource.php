<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectBrochureResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'           => $this->id,
            'title'        => $this->title,
            'sort_order'   => $this->sort_order,
            'brochure_url' => $this->getFirstMediaUrl('brochure'),
            'cover_url'    => $this->getFirstMediaUrl('cover', 'thumb'),
        ];
    }
}
