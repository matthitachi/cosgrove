<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AgentSubmission extends Model
{
    const STATUS_NEW       = 'new';
    const STATUS_CONTACTED = 'contacted';
    const STATUS_APPROVED  = 'approved';
    const STATUS_REJECTED  = 'rejected';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'company',
        'status',
        'notes',
        'submitted_at',
    ];

    protected $casts = [
        'submitted_at' => 'datetime',
        'status'       => 'string',
    ];

    public static function statuses(): array
    {
        return [
            self::STATUS_NEW       => 'New',
            self::STATUS_CONTACTED => 'Contacted',
            self::STATUS_APPROVED  => 'Approved',
            self::STATUS_REJECTED  => 'Rejected',
        ];
    }

    public function getFullNameAttribute(): string
    {
        return trim($this->first_name . ' ' . $this->last_name);
    }

    public function scopeNew($query)
    {
        return $query->where('status', self::STATUS_NEW);
    }

    public function scopeContacted($query)
    {
        return $query->where('status', self::STATUS_CONTACTED);
    }

    public function scopeApproved($query)
    {
        return $query->where('status', self::STATUS_APPROVED);
    }

    public function scopeRejected($query)
    {
        return $query->where('status', self::STATUS_REJECTED);
    }
}
