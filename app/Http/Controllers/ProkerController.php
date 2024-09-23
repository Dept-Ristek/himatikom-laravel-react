<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProkerStoreRequest;
use App\Http\Requests\ProkerUpdateRequest;
use App\Models\Kepengurusan;
use App\Models\Proker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ProkerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Proker/Page', [
            'title' => 'HIMATIKOM POLSUB | Proker dan Agenda',
            'prokers' => Proker::with('kepengurusan')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Proker/Create', [
            'title' => 'HIMATIKOM POLSUB | Tambah Proker dan Agenda',
            'kepengurusans' => Kepengurusan::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProkerStoreRequest $request)
    {
        DB::transaction(function() use($request) {
            $validated = $request->validated();
            $validated['slug'] = Str::slug($validated['name']);
            $validated['status'] = "scheduled";
            $proker = Proker::create($validated);
        });
        return Redirect::route('admin.proker.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Proker $proker)
    {
        return Inertia::render('Proker/Detail', [
            'title' => 'HIMATIKOM POLSUB | Detail Proker dan Agenda',
            'proker' => $proker->with(['kepanitiaans', 'users']),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Proker $proker)
    {
        return Inertia::render('Proker/Edit', [
            'title' => 'HIMATIKOM POLSUB | Edit Proker dan Agenda',
            'proker' => $proker,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProkerUpdateRequest $request, Proker $proker)
    {
        DB::transaction(function() use($request, $proker) {
            $validated = $request->validated();
            $validated['slug'] = Str::slug($validated['name']);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Proker $proker)
    {
        //
    }
}
