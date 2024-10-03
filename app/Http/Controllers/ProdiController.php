<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProdiRequest;
use App\Http\Requests\ProdiUpdateRequest;
use App\Models\Prodi;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use PhpParser\Node\Stmt\TryCatch;

class ProdiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function APIGetAllData()
    {

        return Collection::make(Prodi::all());
    }

    public function index(): Response
    {
        return Inertia::render('Prodi/Page', [
            'title' => 'Program Studi',
            'prodis' => Prodi::all(['id', 'name', 'slug']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Prodi/Create', [
            'title' => 'Tambah Program Studi',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProdiRequest $request)
    {
        DB::transaction(function() use($request) {
            $validated = $request->validated();
            $validated['slug'] = Str::slug($validated['name']);
            if ($request->hasFile('image')) {
                $filePath = $request->file('image')->store('prodis');
                $validated['image'] = "/storage/$filePath";
            } else {
                $validated['image'] = '/icon/preview.jpg';
            }
            $prodi = Prodi::create($validated);
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Prodi $prodi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prodi $prodi): Response
    {
        return Inertia::render('Prodi/Edit', [
            'title' => 'Edit Program Studi',
            'prodi' => $prodi
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProdiUpdateRequest $request, Prodi $prodi)
    {
        DB::transaction(function() use($request, $prodi) {
            $validated = $request->validated();
            $validated['slug'] = Str::slug($validated['name']);
            if ($request->hasFile('image')) {
                $filePath = $request->file('image')->store('prodis');
                $validated['image'] = "/storage/$filePath";
            } else {
                $validated['image'] = $prodi->image;
            }
            $prodi->update($validated);
        });

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prodi $prodi)
    {
        DB::beginTransaction();
        try {
            $prodi->delete();
            DB::commit();
            return Redirect::route('admin.prodi.index');
        } catch (\Exception $e) {
            DB::rollBack();
            return Redirect::route('admin.prodi.index')->with('error', 'Terjadi kesalahan ketika menghapus data!');
        }
    }
}
