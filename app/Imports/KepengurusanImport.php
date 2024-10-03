<?php

namespace App\Imports;

use App\Models\Kepengurusan;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class KepengurusanImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        foreach ($collection as $kepengurusan) {
            Kepengurusan::create([
                'name' => $kepengurusan['name'],
                'description' => $kepengurusan['description'],
                'periode' => $kepengurusan['periode'],
                'poster' => $kepengurusan['poster'],
            ]);
        }
    }
}
