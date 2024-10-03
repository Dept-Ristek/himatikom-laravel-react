<?php

namespace Database\Seeders;

use App\Imports\KepengurusanImport;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;

class KepengurusanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Excel::import(new KepengurusanImport, storage_path('app/private') . "/kepengurusan.xlsx");
    }
}
