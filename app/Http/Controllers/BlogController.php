<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogStoreRequest;
use App\Http\Requests\BlogUpdateRequest;
use App\Models\Blog;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function APIGetAllData()
    {
        return Blog::paginate(3);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Blog/Page', [
            'title' => 'Berita HIMATIKOM',
            'blogs' => Blog::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Blog/Create', [
            'title' => 'Tambah Data Berita',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BlogStoreRequest $request)
    {
        $user = Auth::user();
        DB::transaction(function() use($request, $user) {
            $validated = $request->validated();
            $validated['slug'] = Str::slug($validated['title']);
            $validated['user_id'] = $user->id;
            if ($request->hasFile('image')) {
                $filePath = $request->file('image')->store('blogs');
                $validated['image'] = "/storage/$filePath";
            } else {
                $validated['image'] = "/icon/preview.jpg";
            }
            $blog = Blog::create($validated);
        });
        return Redirect::route('admin.blog.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        return Inertia::render('Blog/Edit', [
            'title' => 'Edit Data Berita',
            'blog' => $blog,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BlogUpdateRequest $request, Blog $blog)
    {
        $user = Auth::user();
        DB::transaction(function() use($request, $user, $blog) {
            $validated = $request->validated();
            $validated['slug'] = Str::slug($validated['title']);
            $validated['user_id'] = $user->id;
            if ($request->hasFile('image')) {
                $filePath = $request->file('image')->store('blogs');
                $validated['image'] = "/storage/$filePath";
            } else {
                $validated['image'] = "/icon/preview.jpg";
            }
            $blog->update($validated);
        });
        return Redirect::route('admin.blog.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
