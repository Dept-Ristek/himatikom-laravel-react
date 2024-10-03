<?php

namespace App\Http\Controllers;

use App\Models\Inbox;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class InboxController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::transaction(function() use($request) {
            $validated = $request->validate([
                'content' => ['string']
            ]);
            $validated['is_anon'] = true;
            if (!$request->is_anon) {
                $validated['is_anon'] = false;
                $validated['user_id'] = Auth::user()->id;
            }
            $inbox = Inbox::create($validated);
        });
    }

}
