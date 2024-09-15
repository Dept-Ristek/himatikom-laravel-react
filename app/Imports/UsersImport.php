<?php

namespace App\Imports;

use App\Models\User;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class UsersImport implements ToCollection, WithHeadingRow
{
    public function collection(Collection $collection)
    {
        foreach ($collection as $user) {
            $user = User::create([
                'nim' => $user['nim'],
                'name' => $user['name'],
                'email' => $user['email'] ?? fake()->unique()->safeEmail(),
                'password' => bcrypt($user['nim']),
            ]);
            $user->assignRole('anggota');
        }
    }
}
