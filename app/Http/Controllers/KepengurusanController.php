<?php

namespace App\Http\Controllers;

use App\Http\Requests\KepengurusanStoreRequest;
use App\Http\Requests\KepengurusanUpdateRequest;
use App\Models\Kepengurusan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class KepengurusanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Kepengurusan/Page', [
            'title' => ' Kepengurusan',
            'kepengurusans' => Kepengurusan::all(['id', 'name', 'description', 'poster', 'periode']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Kepengurusan/Create', [
            'title' => ' Tambah Kepengurusan',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(KepengurusanStoreRequest $request)
    {
        // dd($request->all());
        DB::transaction(function() use($request) {
            $validated = $request->validated();
            if ($request->hasFile('poster')) {
                $filePath = $request->file('poster')->store('posters');
                $validated['poster'] = "/storage/$filePath";
            } else {
                $validated['poster'] = "/icon/ketua.png";
            }
            $kepengurusan = Kepengurusan::create($validated);
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Kepengurusan $kepengurusan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kepengurusan $kepengurusan)
    {
        return Inertia::render('Kepengurusan/Edit', [
            'title' => ' Edit Kepengurusan',
            'kepengurusan' => $kepengurusan
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(KepengurusanUpdateRequest $request, Kepengurusan $kepengurusan)
    {
        // dd($request->hasFile('poster'));
        DB::transaction(function() use($request, $kepengurusan) {
            $validated = $request->validated();
            if ($request->hasFile('poster')) {
                // unlink($kepengurusan->poster);
                $filePath = $request->file('poster')->store('posters');
                $validated['poster'] = "/storage/$filePath";
            } else {
                $validated['poster'] = $kepengurusan->poster;
            }
            $kepengurusan->update($validated);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kepengurusan $kepengurusan)
    {
        DB::beginTransaction();
        try {
            $kepengurusan->delete();
            DB::commit();
            return Redirect::route('admin.kepengurusan.index');
        } catch (\Exception $e) {
            DB::rollBack();
            return Redirect::route('admin.kepengurusan.index')->with('error', 'Gagal menghapus data!');
        }
    }
}
