<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ProdiController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/prodi', [ProdiController::class, 'APIGetAllData'])->name('api.prodi.get');
Route::get('/blog', [BlogController::class, 'APIGetAllData'])->name('api.blog.get');
Route::get('/product', [ProductController::class, 'APIGetAllData'])->name('api.product.get');
