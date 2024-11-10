<?php

namespace Database\Seeders;

use App\Models\TempPemilihan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaslonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pemilihan = [
            [
                'name' => 'Ardy Damar Amalludin & Tegar Kusuma',
                'image' => '/mubes/paslon1.jpg',
                'total' => 0
            ],
            [
                'name' => 'Baraja Putra & Ridho Hasbi Ashiddiq',
                'image' => '/mubes/paslon2.jpg',
                'total' => 0
            ]
        ];
        foreach ($pemilihan as $data) {
            TempPemilihan::create([
                'name' => $data['name'],
                'image' => $data['image'],
                'total' => $data['total']
            ]);
        }
    }
}
