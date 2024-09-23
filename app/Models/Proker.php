<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

use function PHPSTORM_META\map;

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

    public function kepanitiaans(): BelongsToMany
    {
        return $this->belongsToMany(Kepanitiaan::class, 'kepanitiaan_prokers');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'kepanitiaan_prokers');
    }

    public function kepengurusan(): BelongsTo
    {
        return $this->belongsTo(Kepengurusan::class);
    }
}
