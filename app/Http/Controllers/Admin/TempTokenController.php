<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Temp\TokenStoreRequest;
use App\Models\TempToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class TempTokenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Temp/Token/Page', [
            'title' => 'Token Pemilihan',
            'tokens' => TempToken::all()
        ]);
    }

    public function export(): Response
    {
        return Inertia::render('Temp/Token/Export', [
            'title' => 'Export Token',
            'tokens' => TempToken::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Temp/Token/Create', [
            'title' => 'Buatkan Token Pemilihan'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TokenStoreRequest $request)
    {
        DB::transaction(function () use ($request) {
            $validated = $request->validated();
            for ($i = 1; $i <= intval($validated['total']); $i++) {
                TempToken::create([
                    'token' => fake()->regexify('[A-Za-z0-9]{8}'),
                    'is_used' => false
                ]);
            }
        });
        return response()->json([
            'title' => 'Tambah Kode Token',
            'message' => 'Berhasil menambahkan kode token sesuai jumlah yang diinputkan!'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(TempToken $tempToken)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TempToken $tempToken)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TempToken $tempToken)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TempToken $tempToken)
    {
        //
    }
}
