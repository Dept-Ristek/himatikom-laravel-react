<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\KepanitiaanController;
use App\Http\Controllers\KepengurusanController;
use App\Http\Controllers\PengurusController;
use App\Http\Controllers\ProdiController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProkerController;
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
        Route::get('/tentang/himpunan', 'himpunan')->name('front.himpunan');
        Route::get('/tentang/jurusan', 'jurusan')->name('front.jurusan');
    });
});

Route::prefix('admin')->name('admin.')->group(function() {
    Route::controller(DashboardController::class)->middleware(['auth'])->group(function() {
        Route::get('/dashboard', 'index')->name('dashboard');
    });

    Route::controller(ProdiController::class)->middleware(['auth'])->group(function() {
        Route::get('/prodi', 'index')->name('prodi.index');
        Route::get('/prodi/create', 'create')->name('prodi.create');
        Route::get('/prodi/edit/{prodi}', 'edit')->name('prodi.edit');

        Route::post('/prodi/store', 'store')->name('prodi.store');

        Route::put('/prodi/update/{prodi}', 'update')->name('prodi.update');

        Route::delete('/prodi/delete/{prodi}', 'destroy')->name('prodi.delete');
    });

    Route::controller(UserController::class)->middleware(['auth'])->group(function() {
        Route::get('/user', 'index')->name('user.index');
        Route::get('/user/create', 'create')->name('user.create');
        Route::get('/user/edit/{user}', 'edit')->name('user.edit');
        Route::get('/user/import', 'import')->name('user.import');

        Route::post('/user/import/store', 'import_store')->name('user.import.store');
        Route::post('/user/store', 'store')->name('user.store');

        Route::put('/user/update/{user}', 'update')->name('user.update');
    });

    Route::controller(KepengurusanController::class)->middleware(['auth'])->group(function() {
        Route::get('/kepengurusan', 'index')->name('kepengurusan.index');
        Route::get('/kepengurusan/create', 'create')->name('kepengurusan.create');
        Route::get('/kepengurusan/edit/{kepengurusan}', 'edit')->name('kepengurusan.edit');

        Route::put('/kepengurusan/update/{kepengurusan}', 'update')->name('kepengurusan.update');

        Route::post('/kepengurusan/store', 'store')->name('kepengurusan.store');

        Route::delete('/kepengurusan/delete/{kepengurusan}', 'destroy')->name('kepengurusan.delete');
    });

    Route::controller(PengurusController::class)->middleware(['auth'])->group(function() {
        Route::get('/pengurus', 'index')->name('pengurus.index');
        Route::get('/pengurus/create', 'create')->name('pengurus.create');
        Route::get('/pengurus/edit/{pengurus:id}', 'edit')->name('pengurus.edit');

        Route::post('/pengurus/store', 'store')->name('pengurus.store');

        Route::put('/pengurus/update/{pengurus:id}', 'update')->name('pengurus.update');

        Route::delete('/pengurus/delete/{pengurus:id}', 'destroy')->name('pengurus.delete');
    });

    Route::controller(KepanitiaanController::class)->middleware(['auth'])->group(function() {
        Route::get('/kepanitiaan', 'index')->name('kepanitiaan.index');
        Route::get('/kepanitiaan/create', 'create')->name('kepanitiaan.create');
        Route::get('/kepanitiaan/edit/{kepanitiaan}', 'edit')->name('kepanitiaan.edit');

        Route::post('/kepanitiaan/store', 'store')->name('kepanitiaan.store');

        Route::put('/kepanitiaan/update/{kepanitiaan}', 'update')->name('kepanitiaan.update');

        Route::delete('/kepanitiaan/delete/{kepantiaan}', 'destroy')->name('kepanitiaan.delete');
    });

    Route::controller(ProkerController::class)->middleware(['auth'])->group(function() {
        Route::get('/proker', 'index')->name('proker.index');
        Route::get('/proker/create', 'create')->name('proker.create');
        Route::get('/proker/edit/{proker:id}', 'edit')->name('proker.edit');
        Route::get('/proker/detail/{proker:id}', 'show')->name('proker.detail');

        Route::post('/proker/store', 'store')->name('proker.store');

        Route::put('/proker/update/{proker:id}', 'update')->name('proker.update');

        Route::delete('/proker/delete/{proker:id}', 'destroy')->name('proker.delete');
    });

    Route::controller(BlogController::class)->middleware(['auth'])->group(function() {
        Route::get('/blog', 'index')->name('blog.index');
        Route::get('/blog/create', 'create')->name('blog.create');
        Route::get('/blog/edit/{blog}', 'edit')->name('blog.edit');

        Route::post('/blog/store', 'store')->name('blog.store');

        Route::put('/blog/update/{blog}', 'update')->name('blog.update');
    });

    Route::controller(InboxController::class)->middleware(['auth'])->group(function() {
            Route::get('/inbox', 'index')->name('inbox.index');
        Route::post('/inbox/store', 'store')->name('inbox.store');
    });

    Route::controller(ProductController::class)->middleware(['auth'])->group(function() {
        Route::get('/product', 'index')->name('product.index');
        Route::get('/product/create', 'create')->name('product.create');
        Route::get('/product/edit/{product}', 'edit')->name('product.edit');

        Route::post('/product/store', 'store')->name('product.store');

        Route::put('/product/updat/{product}', 'update')->name('product.update');

        Route::delete('/product/delete/{product}', 'destroy')->name('product.delete');
    });
});

require __DIR__.'/auth.php';
