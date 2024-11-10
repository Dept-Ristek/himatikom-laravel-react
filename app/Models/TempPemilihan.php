<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class TempPemilihan extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'iamge', 'total'];

    public function temp_token(): HasMany
    {
        return $this->hasMany(TempToken::class);
    }
}
