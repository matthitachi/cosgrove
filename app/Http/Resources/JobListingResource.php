<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobListingResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'title'       => $this->title,
            'department'  => $this->department,
            'location'    => $this->location,
            'description' => $this->description,
            'sort_order'  => $this->sort_order,
        ];
    }
}
