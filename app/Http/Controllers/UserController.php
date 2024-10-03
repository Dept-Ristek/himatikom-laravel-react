<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserImportStoreRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Imports\UsersImport;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Users/Page', [
            'title' => " Users",
            'users' => User::where('nim', '!=', '12345678')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Users/Create', [
            'title' => ' Tambah User'
        ]);
    }

    public function import(): Response
    {
        return Inertia::render('Users/Import', [
            'title' => ' Import Users',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserStoreRequest $request)
    {
        DB::transaction(function() use($request) {
            $validated = $request->validated();
            if ($request->hasFile('avatar')) {
                $filePath = $request->file('avatar')->store('avatars');
                $validated['avatar'] = "/storage/$filePath";
            } else {
                $validated['avatar'] = "/icon/default-avatar.jpg";
            }
            $validated['password'] = bcrypt($validated['nim']);
            $user = User::create($validated);
            $user->assignRole('anggota');
        });
    }

    public function import_store(UserImportStoreRequest $request)
    {
        DB::transaction(function() use($request) {
            if ($request->hasFile('file')) {
                $user = Excel::import(new UsersImport, $request->file('file'));
            }
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user): Response
    {
        return Inertia::render('Users/Edit', [
            'title' => 'HIMATIKOM | Edit User',
            'user' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        DB::transaction(function() use($request, $user) {
            $validated = $request->validated();
            $data = [
                'nim' => $validated['nim'],
                'name' => $validated['name'],
                'email' => $validated['email'],
            ];
            if ($request->password) {
                $data['password'] = bcrypt($validated['password']);
            }
            $user->update($data);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
