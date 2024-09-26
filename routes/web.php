<?php

use App\Http\Controllers\KepanitiaanController;
use App\Http\Controllers\KepanitiaanProkerController;
use App\Http\Controllers\KepengurusanController;
use App\Http\Controllers\PengurusController;
use App\Http\Controllers\ProdiController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProkerController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'title' => 'Beranda',
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('front.index');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('admin')->name('admin.')->group(function() {
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

    Route::controller(KepanitiaanProkerController::class)->middleware(['auth'])->group(function() {
        Route::get('/proker/{proker:id}/kepanitiaan/create', 'create')->name('proker.kepanitiaan.create');

        Route::post('/proker/{proker:id}/kepanitiaan/store', 'store')->name('proker.kepanitiaan.store');
    });
});

require __DIR__.'/auth.php';
