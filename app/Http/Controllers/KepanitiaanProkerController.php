<?php

namespace App\Http\Controllers;

use App\Http\Requests\KepanitiaanProkerStoreRequest;
use App\Models\Kepanitiaan;
use App\Models\KepanitiaanProker;
use App\Models\Proker;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class KepanitiaanProkerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Proker $proker): Response
    {
        $kepanitiaanProker = KepanitiaanProker::where('proker_id', $proker->id)->get();
        $newKepanitiaanProker = Collection::make($kepanitiaanProker);
        return Inertia::render('Proker/Kepanitiaan/Create', [
            'title' => "Tambah Kepanitiaan Proker $proker->name",
            'proker' => $proker,
            'kepanitiaans' => Kepanitiaan::all(),
            'kepanitiaan_prokers' => $newKepanitiaanProker->load(['proker', 'kepanitiaan'])
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(KepanitiaanProkerStoreRequest $request)
    {
        DB::transaction(function() use($request) {
            $validated = $request->validated();
            if (count($validated['kepanitiaan_id']) > 0) {
                foreach ($validated['kepanitiaan_id'] as $data) {
                    $check = KepanitiaanProker::where([['kepanitiaan_id', $data], ['proker_id', $validated['proker_id']]])->first();
                    if ($check) {
                        
                    } else {
                        KepanitiaanProker::create([
                            'kepanitiaan_id' => $data,
                            'proker_id' => $validated['proker_id']
                        ]);
                    }
                }
            }
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(KepanitiaanProker $kepanitiaanProker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(KepanitiaanProker $kepanitiaanProker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, KepanitiaanProker $kepanitiaanProker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KepanitiaanProker $kepanitiaanProker)
    {
        //
    }
}
