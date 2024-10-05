<?php

namespace App\Http\Controllers;

use App\Http\Requests\DocumentStoreRequest;
use App\Http\Requests\DocumentUpdateRequest;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Document/Page', [
            'title' => 'Documents',
            'documents' => Document::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Document/Create', [
            'title' => 'Tambah Document',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DocumentStoreRequest $request)
    {
        $user = Auth::user();
        DB::transaction(function() use($request, $user) {
            $validated = $request->validated();
            if ($request->hasFile('filepath')) {
                $filePath = $request->file('filepath')->store('documents');
                $validated['filepath'] = "/storage/$filePath";
            } else {
                $validated['filepath'] = null;
            }
            $validated['user_id'] = $user->id;
            $document = Document::create($validated);
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Document $document)
    {
        return Inertia::render('Document/Edit', [
            'title' => 'Edit Document',
            'document' => $document
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DocumentUpdateRequest $request, Document $document)
    {
        $user = Auth::user();
        DB::transaction(function() use($request, $user, $document) {
            $validated = $request->validated();
            if ($request->hasFile('filepath')) {
                $filePath = $request->file('filepath')->store('documents');
                $validated['filepath'] = "/storage/$filePath";
            } else {
                $validated['filepath'] = $document->filepath;
            }
            $validated['user_id'] = $user->id;
            $document->update($validated);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        DB::beginTransaction();
        try {
            $document->delete();
            DB::commit();
            return Redirect::route('admin.document.index');
        } catch (\Exception $e) {
            DB::rollBack();
            return Redirect::route('admin.document.index')->with('error', 'Terjadi kesalahan ketika menghapus dokument!');
        }
    }
}
