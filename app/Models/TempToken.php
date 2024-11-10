<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class TempToken extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['token', 'is_used', 'temp_pemilihan_id'];

    public function temp_pemilihan(): BelongsTo
    {
        return $this->belongsTo(TempPemilihan::class);
    }
}
