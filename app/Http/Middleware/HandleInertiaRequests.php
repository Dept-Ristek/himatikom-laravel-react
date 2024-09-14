<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = Auth::user();
        if ($user) {
            $user = [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'nim' => $user->nim,
                'email_verified_at' => $user->email_verified_at,
                'roles' => $user->getRoleNames(),
            ];
        }
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
            ],
        ];
    }
}
