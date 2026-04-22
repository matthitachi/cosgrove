<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PressArticle extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'headline',
        'publication',
        'published_date',
        'external_url',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'published_date' => 'date',
        'is_active'      => 'boolean',
        'sort_order'     => 'integer',
    ];

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
