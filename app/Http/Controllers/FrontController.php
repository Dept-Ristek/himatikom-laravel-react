<?php

namespace App\Http\Controllers;

use App\Models\Kepengurusan;
use App\Models\Prodi;
use App\Models\Proker;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FrontController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Front/Welcome', [
            'title' => 'Beranda',
        ]);
    }

    public function proker(): Response
    {
        $prokers = Collection::make(Proker::where([['is_proker', true], ['need_to_register', true]])->get());

        return Inertia::render('Front/Program/Proker', [
            'title' => 'Program Kerja',
            'prokers' => $prokers->load(['kepengurusan']),
        ]);
    }

    public function prodi(Prodi $prodi): Response
    {
        return Inertia::render('Front/Program/Prodi', [
            'title' => "$prodi->name",
            'prodi' => $prodi,
        ]);
    }

    public function himpunan(): Response
    {
        return Inertia::render('Front/Tentang/Himpunan', [
            'title' => 'Himpunan',
            'kepengurusans' => Kepengurusan::all(),
        ]);
    }

    public function jurusan(): Response
    {
        return Inertia::render('Front/Tentang/Jurusan', [
            'title' => 'JTIK',
        ]);
    }
}