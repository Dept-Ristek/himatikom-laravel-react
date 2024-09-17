<?php

namespace App\Http\Controllers;

use App\Http\Requests\PengurusStoreRequest;
use App\Http\Requests\PengurusUpdateRequest;
use App\Models\Kepengurusan;
use App\Models\Pengurus;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class PengurusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Pengurus/Page', [
            'title' => 'HIMATIKOM POLSUB | Pengurus',
            'pengurus' => Pengurus::with(['user', 'kepengurusan'])->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Pengurus/Create', [
            'title' => 'HIMATIKOM POLSUB | Tambah Pengurus',
            'users' => User::all(),
            'kepengurusans' => Kepengurusan::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PengurusStoreRequest $request)
    {
        DB::transaction(function() use($request) {
            $user = User::find($request->user_id);
            $validated = $request->validated();
            $validated['is_active'] = true;
            $pengurus = Pengurus::create($validated);
            $user->removeRole('anggota');
            $user->assignRole('pengurus');
        });
        return Redirect::route('admin.pengurus.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Pengurus $pengurus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pengurus $pengurus)
    {
        return Inertia::render('Pengurus/Edit', [
            'title' => 'HIMATIKOM POLSUB | Edit Data',
            'pengurus' => $pengurus->with(['user', 'kepengurusan'])->first(),
            'users' => User::all(),
            'kepengurusans' => Kepengurusan::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PengurusUpdateRequest $request, Pengurus $pengurus)
    {
        DB::transaction(function() use($request, $pengurus) {
            $pengurus->user->removeRole('pengurus');
            $pengurus->user->assignRole('anggota');
            $validated = $request->validated();
            $pengurus->update($validated);
            $pengurus->user->removeRole('anggota');
            $pengurus->user->assignRole('pengurus');
        });
        return Redirect::route('admin.pengurus.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pengurus $pengurus)
    {
        DB::beginTransaction();
        try {
            $pengurus->user->removeRole('pengurus');
            $pengurus->user->assignRole('anggota');
            $pengurus->delete();
            DB::commit();
            return Redirect::route('admin.pengurus.index');
        } catch (\Exception $e) {
            DB::rollBack();
            return Redirect::route('admin.pengurus.index')->with('error', 'Gagal menghapus data!');
        }
    }
}
