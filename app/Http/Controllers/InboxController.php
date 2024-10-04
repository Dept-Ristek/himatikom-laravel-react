<?php

namespace App\Http\Controllers;

use App\Models\Inbox;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class InboxController extends Controller
{
    public function index(): Response
    {
        $inboxes = Collection::make(Inbox::orderBy('created_at', 'desc')->get());

        return Inertia::render('Inbox/Page', [
            'title' => 'Saran & Masukan',
            'inboxes' => $inboxes->load(['user']),
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::transaction(function() use($request) {
            $validated = $request->validate([
                'content' => ['string'],
                'is_anon' => ['boolean'],
            ]);
            if ($request->is_anon == false) {
                $validated['is_anon'] = false;
                $validated['user_id'] = Auth::user()->id;
            } else {
                $validated['is_anon'] = true;
            }
            $inbox = Inbox::create($validated);
        });
    }

}
