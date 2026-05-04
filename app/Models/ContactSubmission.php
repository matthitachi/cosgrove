<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactSubmission extends Model
{
    protected $fillable = [
        'name', 'email', 'phone', 'project', 'message',
        'source', 'status', 'notes', 'submitted_at',
    ];

    protected $casts = [
        'submitted_at' => 'datetime',
    ];

    const STATUS_NEW     = 'new';
    const STATUS_READ    = 'read';
    const STATUS_REPLIED = 'replied';

    const SOURCE_CONTACT = 'contact_page';
    const SOURCE_FOOTER  = 'footer';

    public static function statuses(): array
    {
        return [
            self::STATUS_NEW     => 'New',
            self::STATUS_READ    => 'Read',
            self::STATUS_REPLIED => 'Replied',
        ];
    }

    public function getSourceLabelAttribute(): string
    {
        return match ($this->source) {
            self::SOURCE_FOOTER => 'Footer form',
            default             => 'Contact page',
        };
    }

    public function scopeNew($query)
    {
        return $query->where('status', self::STATUS_NEW);
    }

    public function scopeRead($query)
    {
        return $query->where('status', self::STATUS_READ);
    }

    public function scopeReplied($query)
    {
        return $query->where('status', self::STATUS_REPLIED);
    }
}
