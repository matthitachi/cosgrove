<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactPersonResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'title'      => $this->title,
            'email'      => $this->email,
            'sort_order' => $this->sort_order,
            'photo_url'  => $this->getFirstMediaUrl('photo', 'thumb') ?: null,
        ];
    }
}
