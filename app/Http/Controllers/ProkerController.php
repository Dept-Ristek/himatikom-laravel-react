<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProkerStoreRequest;
use App\Http\Requests\ProkerUpdateRequest;
use App\Models\Kepengurusan;
use App\Models\Proker;
use Carbon\Carbon;
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
            'title' => ' Proker dan Agenda',
            'prokers' => Proker::with('kepengurusan')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Proker/Create', [
            'title' => ' Tambah Proker dan Agenda',
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
            $validated['schedule'] = Carbon::parse($request->schedule)->setTimezone('Asia/Jakarta');
            if ($request->need_to_register) {
                $validated['start_register'] = Carbon::parse($request->start_register)->setTimezone('Asia/Jakarta');
                $validated['end_register'] = Carbon::parse($request->end_register)->setTimezone('Asia/Jakarta');
            } else {
                $validated['start_register'] = null;
                $validated['end_register'] = null;
            }
            $validated['kepengurusan_id'] = $request->kepengurusan_id;
            $validated['slug'] = Str::slug($validated['name']);
            $validated['status'] = "scheduled";
            $proker = Proker::create($validated);
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Proker $proker)
    {
        return Inertia::render('Proker/Detail', [
            'title' => ' Detail Proker dan Agenda',
            'proker' => $proker->with(['kepanitiaans', 'users']),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Proker $proker)
    {
        return Inertia::render('Proker/Edit', [
            'title' => ' Edit Proker dan Agenda',
            'proker' => $proker->load('kepengurusan'),
            'kepengurusans' => Kepengurusan::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProkerUpdateRequest $request, Proker $proker)
    {
        DB::transaction(function() use($request, $proker) {
            $validated = $request->validated();
            $validated['schedule'] = Carbon::parse($request->schedule)->setTimezone('Asia/Jakarta');
            if ($validated['need_to_register']) {
                $validated['start_register'] = Carbon::parse($request->start_register)->setTimezone('Asia/Jakarta');
                $validated['end_register'] = Carbon::parse($request->end_register)->setTimezone('Asia/Jakarta');
            } else {
                $validated['start_register'] = null;
                $validated['end_register'] = null;
            }
            $validated['kepengurusan_id'] = $request->kepengurusan_id;
            $validated['slug'] = Str::slug($validated['name']);
            $proker->update($validated);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Proker $proker)
    {
        DB::beginTransaction();
        try {
            $proker->delete();
            DB::commit();
            return Redirect::route('admin.proker.index');
        } catch (\Exception $e) {
            DB::rollBack();
            return Redirect::route('admin.proker.index')->with('error', 'Terjadi kesalahan ketika menghapus data!');
        }
    }
}
