<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Kepengurusan extends Model
{
    use HasFactory, HasUuids, SoftDeletes;
    protected $fillable = [
        'name',
        'poster',
        'description',
        'periode'
    ];

    protected $nullable = [
        'poster'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function pengurus(): HasMany
    {
        return $this->hasMany(Pengurus::class);
    }

    public function proker(): HasMany
    {
        return $this->hasMany(Proker::class);
    }
}
