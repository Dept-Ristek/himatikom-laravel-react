<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Kepanitiaan extends Model
{
    use HasFactory, HasUuids, SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'description',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function prokers(): BelongsToMany
    {
        return $this->belongsToMany(Proker::class, 'kepanitiaan_prokers');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'kepanitiaan_prokers');
    }
}
