<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::with('creator')
                        ->latest()
                        ->paginate(10);

        return Inertia::render('Events/Index', [
            'events' => $events,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Events/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // MODIFIKASI: Tambahkan validasi untuk field baru
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_time' => 'required|date',
            'end_time' => 'required|date|after:start_time',
            'location' => 'required|string|max:255',
            'latitude' => 'required|numeric|between:-90,90',
            'longitude' => 'required|numeric|between:-180,180',
        ]);

        $validated['created_by'] = Auth::id();
        $validated['attendance_token'] = Str::random(32);

        Event::create($validated);

        return redirect()->route('admin.events.index')->with('success', 'Event berhasil dibuat!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        $event->load('attendances.user', 'creator');

        return Inertia::render('Events/Show', [
            'event' => $event,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        return Inertia::render('Events/Edit', [
            'event' => $event
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        // MODIFIKASI: Tambahkan validasi untuk field baru
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_time' => 'required|date',
            'end_time' => 'required|date|after:start_time',
            'location' => 'required|string|max:255',
            'latitude' => 'required|numeric|between:-90,90',
            'longitude' => 'required|numeric|between:-180,180',
        ]);

        $event->update($validated);

        return redirect()->route('admin.events.show', $event->id)->with('success', 'Event berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        $event->delete();

        return redirect()->route('admin.events.index')->with('success', 'Event berhasil dihapus.');
    }

    // --- METHOD BARU DITAMBAHKAN DI SINI ---
    /**
     * Display the QR code for attendance.
     */
    public function showQrCode(Event $event)
    {
        // Di sini Anda bisa menambahkan otorisasi untuk memastikan
        // hanya pembuat event atau admin yang bisa mengakses halaman ini.
        // Contoh: $this->authorize('viewQrCode', $event);

        return Inertia::render('Events/ShowQr', [
            'event' => $event,
            // URL ini yang akan di-encode menjadi QR Code di frontend
            'attendanceUrl' => url('/absensi/scan/' . $event->attendance_token)
        ]);
    }
}
