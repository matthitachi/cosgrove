<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HomepageStatResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'label'       => $this->label,
            'count_value' => $this->count_value,
            'icon'        => $this->icon,
            'sort_order'  => $this->sort_order,
        ];
    }
}
