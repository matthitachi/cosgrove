<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Page extends Model implements HasMedia
{
    use SoftDeletes, HasSlug, InteractsWithMedia;

    protected $fillable = [
        'title',
        'slug',
        'template',
        'status',
        'sort_order',
        'is_system',
        'meta_title',
        'meta_description',
    ];

    protected $casts = [
        'is_system'  => 'boolean',
        'sort_order' => 'integer',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug')
            ->doNotGenerateSlugsOnUpdate()
            ->slugsShouldBeNoLongerThan(100);
    }

    public function registerMediaCollections(): void
    {
        // Collections are created on-demand per section label; no fixed registration needed
    }

    public function getSectionImageUrl(string $sectionLabel): string
    {
        $collection = 'section-' . Str::slug($sectionLabel);
        return $this->getFirstMediaUrl($collection) ?: '';
    }

    public function sections(): HasMany
    {
        return $this->hasMany(PageSection::class)->orderBy('sort_order');
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function scopeSystem($query)
    {
        return $query->where('is_system', true);
    }

    public static function findBySlug(string $slug): ?self
    {
        return static::published()->where('slug', $slug)->first();
    }
}
