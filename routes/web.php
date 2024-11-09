<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\KepanitiaanController;
use App\Http\Controllers\KepengurusanController;
use App\Http\Controllers\PengurusController;
use App\Http\Controllers\ProdiController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProkerController;
use App\Http\Controllers\TempPemilihanController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;

Route::get('/', function() {
    return Redirect::route('v2.front.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('v2')->name('v2.')->group(function() {
    Route::controller(FrontController::class)->group(function() {
        Route::get('/', 'index')->name('front.index');
        Route::get('/program/program-kerja', 'proker')->name('front.proker');
        Route::get('/program/prodi/{prodi:slug}', 'prodi')->name('front.prodi');

        Route::get('/berita', 'blogs')->name('front.blog');
        Route::get('/berita/detail/{blog}', 'blog_detail')->name('front.blog.detail');

        Route::get('/produk', 'products')->name('front.product');
        Route::get('/produk/detail/{product}', 'product_detail')->name('front.product.detail');

        Route::get('/tentang/himpunan', 'himpunan')->name('front.himpunan');
        Route::get('/tentang/jurusan', 'jurusan')->name('front.jurusan');
    });

    Route::controller(TempPemilihanController::class)->group(function () {
        Route::get('/mubes', 'index')->name('mubes.index');
    });

});

Route::prefix('admin')->name('admin.')->group(function() {
    Route::middleware(['auth'])->group(function() {
        // Dashboard
        Route::resource('dashboard', DashboardController::class);
        // Dashboard additional

        // Prodi
        Route::resource('prodi',ProdiController::class);
        // Prodi additional

        // User additional
        Route::get('/user/import', [UserController::class, 'import'])->name('user.import');
        Route::post('/user/import/store', [UserController::class, 'import_store'])->name('user.import.store');
        // User
        Route::resource('user', UserController::class);

        // Kepengurusan
        Route::resource('kepengurusan', KepengurusanController::class);
        // Kepengurusan additional

        // Pengurus
        Route::resource('pengurus', PengurusController::class);
        // Pengurus additional

        // Kepanitiaan
        Route::resource('kepanitiaan', KepanitiaanController::class);
        // Kepanitiaan additional

        // Proker
        Route::resource('proker', ProkerController::class);
        // Proker additional

        // Blog
        Route::resource('blog', BlogController::class);
        // Blog additional

        // Product
        Route::resource('product', ProductController::class);
        // Product additional

        // Inbox
        Route::resource('inbox', InboxController::class);
        // Inbox additional

        // Document
        Route::resource('document', DocumentController::class);
        // Document additional
    });
});

require __DIR__.'/auth.php';
