<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TempPemilihan;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TempPemilihanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Temp/Pemilihan/Page', [
            'title' => 'Dashboard Pemilihan'
        ]);
    }

    public function get_count()
    {
        $paslon = Collection::make(TempPemilihan::all());
        return $paslon;
    }
}
