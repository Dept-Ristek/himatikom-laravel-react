<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'nim' => '12345678',
            'name' => 'ADMIN HIMATIKOM',
            'email' => 'admin.himatikom@gmail.com',
            'password' => bcrypt('12345678')
        ]);
        $user->assignRole('admin');
    }
}
