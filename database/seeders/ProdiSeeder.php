<?php

namespace Database\Seeders;

use App\Imports\ProdiImport;
use App\Models\Prodi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;

class ProdiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Excel::import(new ProdiImport, storage_path('app/private') . "/program-studi.xlsx");
    }
}
