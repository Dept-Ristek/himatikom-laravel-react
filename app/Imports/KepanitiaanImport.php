<?php

namespace App\Imports;

use App\Models\Kepanitiaan;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class KepanitiaanImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        foreach ($collection as $kepanitiaan) {
            Kepanitiaan::create([
                'name' => $kepanitiaan['name'],
                'slug' => Str::slug($kepanitiaan['name']),
                'description' => $kepanitiaan['description'],
            ]);
        }
    }
}
