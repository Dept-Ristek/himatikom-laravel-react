<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Proker extends Model
{
    use HasFactory, HasUuids, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'is_proker',
        'schedule',
        'is_start',
        'is_end',
        'need_to_register',
        'start_register',
        'end_register',
        'status',
        'kepengurusan_id'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function registration(): HasMany
    {
        return $this->hasMany(Registration::class);
    }

    public function kepengurusan(): BelongsTo
    {
        return $this->belongsTo(Kepengurusan::class);
    }
}
