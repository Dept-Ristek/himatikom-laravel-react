<?php

use App\Http\Controllers\KepengurusanController;
use App\Http\Controllers\ProdiController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

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
    });
});

require __DIR__.'/auth.php';
