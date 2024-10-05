<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function APIGetAllData()
    {
        return Collection::make(Product::paginate(4));
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Product/Page', [
            'title' => 'Products',
            'products' => Product::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Product/Create', [
            'title' => 'Tambah Product',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductStoreRequest $request)
    {
        DB::transaction(function() use($request) {
            $validated = $request->validated();
            $validated['slug'] = Str::slug($validated['name']);
            if ($request->hasFile('image')) {
                $pathFile = $request->file('image')->store('products');
                $validated['image'] = "/storage/$pathFile";
            } else {
                $validated['image'] = "/icon/preview.jpg";
            }
            $product = Product::create($validated);
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Product/Edit', [
            'title' => 'Edit Product',
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductUpdateRequest $request, Product $product)
    {
        DB::transaction(function() use($request, $product) {
            $validated = $request->validated();
            $validated['slug'] = Str::slug($validated['name']);
            if ($request->hasFile('image')) {
                $pathFile = $request->file('image')->store('products');
                $validated['image'] = "/storage/$pathFile";
            } else {
                $validated['image'] = $product->image;
            }
            $product->update($validated);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        DB::beginTransaction();
        try {
            $product->delete();
            DB::commit();
            return Redirect::route('admin.product.index');
        } catch (\Exception $e) {
            DB::rollBack();
            return Redirect::route('admin.product.index')->with('error', 'Terjadi kesalahan ketika menghapus data!');
        }
    }
}
