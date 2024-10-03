<?php

namespace App\Imports;

use App\Models\Prodi;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Str;

class ProdiImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $collection)
    {
        foreach ($collection as $prodi) {
            Prodi::create([
                'name' => $prodi['name'],
                'slug' => Str::slug($prodi['name']),
                'image' => $prodi['image'],
                'content' => $prodi['content'],
            ]);
        }
    }
}
