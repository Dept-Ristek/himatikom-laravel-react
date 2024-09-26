<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class KepanitiaanProker extends Model
{
    use HasFactory, HasUuids, SoftDeletes;
    protected $fillable = [
        'proker_id',
        'kepanitiaan_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function proker(): BelongsTo
    {
        return $this->belongsTo(Proker::class);
    }

    public function kepanitiaan(): BelongsTo
    {
        return $this->belongsTo(Kepanitiaan::class);
    }
}
