<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Kepanitiaan extends Model
{
    use HasFactory, HasUuids, SoftDeletes, HasFactory;

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

    public function kepanitiaan_proker(): HasMany
    {
        return $this->hasMany(KepanitiaanProker::class);
    }
}
