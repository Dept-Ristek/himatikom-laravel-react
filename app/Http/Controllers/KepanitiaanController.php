<?php

namespace App\Http\Controllers;

use App\Http\Requests\KepanitiaanStoreRequest;
use App\Http\Requests\KepanitiaanUpdateRequest;
use App\Models\Kepanitiaan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class KepanitiaanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Kepanitiaan/Page', [
            'title' => ' Struktur Kepanitiaan',
            'kepanitiaans' => Kepanitiaan::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Kepanitiaan/Create', [
            'title' => 'HIMATIKOM | Tambah Kepanitiaan',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(KepanitiaanStoreRequest $request)
    {
        DB::transaction(function () use($request) {
            $validated = $request->validated();
            $validated['slug'] = Str::slug($validated['name']);
            $kepanitiaan = Kepanitiaan::create($validated);
        });
        return Redirect::route('admin.kepanitiaan.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kepanitiaan $kepanitiaan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kepanitiaan $kepanitiaan)
    {
        return Inertia::render('Kepanitiaan/Edit', [
            'title' => ' Edit Kepanitiaan',
            'kepanitiaan' => $kepanitiaan
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(KepanitiaanUpdateRequest $request, Kepanitiaan $kepanitiaan)
    {
        DB::transaction(function() use($request, $kepanitiaan) {
            $validated = $request->validated();
            $validated['slug'] = Str::slug($validated['name']);
            $kepanitiaan->update($validated);
        });
        return Redirect::route('admin.kepanitiaan.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kepanitiaan $kepanitiaan)
    {
        DB::beginTransaction();
        try {
            $kepanitiaan->delete();
            DB::commit();
            return Redirect::route('admin.kepanitiaan.index');
        } catch (\Exception $e) {
            DB::rollBack();
            return Redirect::route('admin.kepanitiaan.index')->with('error', 'Gagal menghapus data');
        }
    }
}
