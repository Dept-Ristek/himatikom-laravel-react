<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Registration extends Model
{
    use HasFactory, HasUuids, SoftDeletes;

    public function proker(): BelongsTo
    {
        return $this->belongsTo(Proker::class);
    }

    public function kepanitiaan(): BelongsTo
    {
        return $this->belongsTo(Kepanitiaan::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
