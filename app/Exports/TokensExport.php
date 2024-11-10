<?php

namespace App\Exports;

use App\Models\TempToken;
use Illuminate\Database\Eloquent\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;

class TokensExport implements FromCollection
{
    protected $token;

    public function __construct()
    {
        $this->token = Collection::make(TempToken::all());
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return TempToken::all();
    }
}
