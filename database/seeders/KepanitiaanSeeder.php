<?php

namespace Database\Seeders;

use App\Imports\KepanitiaanImport;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class KepanitiaanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // dd("./kepanitiaan.xlsx");
        // dd("./kepengurusan.xlsx");
        // file_exists("kepanitiaan.xlsx");
        Excel::import(new KepanitiaanImport, storage_path('app/private') . "/kepanitiaan.xlsx");
    }
}
