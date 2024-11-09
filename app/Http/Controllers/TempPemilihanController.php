<?php

namespace App\Http\Controllers;

use App\Models\TempPemilihan;
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
        return Inertia::render('Front/Program/Mubes/Page', [
            'title' => 'MUBES 2024'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(TempPemilihan $tempPemilihan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TempPemilihan $tempPemilihan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TempPemilihan $tempPemilihan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TempPemilihan $tempPemilihan)
    {
        //
    }
}
