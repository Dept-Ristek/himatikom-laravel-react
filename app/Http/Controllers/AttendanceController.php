<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Attendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log; // Untuk debugging
use Inertia\Inertia;

class AttendanceController extends Controller
{
    // Halaman untuk panitia menampilkan QR Code
    public function showQr(Event $event)
    {
        // Pastikan hanya panitia/admin yang bisa melihat halaman ini
        // Tambahkan logic authorization di sini jika perlu

        return Inertia::render('Attendance/ShowQr', [
            'event' => $event,
            'attendanceUrl' => url('/absensi/scan/' . $event->attendance_token)
        ]);
    }

    // Halaman untuk peserta melakukan scan
    public function scannerPage()
    {
        return Inertia::render('Attendance/Scanner');
    }

    // API endpoint untuk mencatat absensi
    public function record(Request $request)
    {
        // BARU: Tambahkan validasi untuk koordinat dari scanner
        $request->validate([
            'token' => 'required|string|exists:events,attendance_token',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        try {
            $event = Event::where('attendance_token', $request->token)->firstOrFail();
            $user = Auth::user();
            $now = now();

            // 1. VALIDASI WAKTU EVENT
            if ($now->isBefore($event->start_time)) {
                return response()->json(['status' => 'error', 'message' => 'Acara belum dimulai.'], 403);
            }
            if ($now->isAfter($event->end_time)) {
                return response()->json(['status' => 'error', 'message' => 'Acara telah berakhir.'], 403);
            }

            // 2. VALIDASI LOKASI (RADIUS 100 METER)
            $distance = $this->calculateDistance(
                $event->latitude, $event->longitude,
                $request->latitude, $request->longitude
            );

            // Jarak dalam meter
            if ($distance > 100) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Anda berada terlalu jauh dari lokasi acara. Jarak Anda: ' . round($distance) . ' meter.'
                ], 403);
            }

            // Cek duplikasi (logika yang sudah ada)
            $existingAttendance = Attendance::where('event_id', $event->id)->where('user_id', $user->id)->first();
            if ($existingAttendance) {
                return response()->json(['status' => 'warning', 'message' => 'Anda sudah tercatat hadir di acara ini.'], 409);
            }

            // Catat absensi baru
            Attendance::create([
                'event_id' => $event->id,
                'user_id' => $user->id,
            ]);

            return response()->json(['status' => 'success', 'message' => 'Kehadiran berhasil dicatat! Selamat mengikuti acara, ' . $user->name . '!']);

        } catch (\Exception $e) {
            Log::error('Attendance Error: ' . $e->getMessage());
            return response()->json(['status' => 'error', 'message' => 'Terjadi kesalahan. Token tidak valid atau server bermasalah.'], 500);
        }
    }

    /**
     * Helper function untuk menghitung jarak antara dua titik koordinat (Haversine Formula).
     * @return float Jarak dalam meter.
     */
    private function calculateDistance($lat1, $lon1, $lat2, $lon2) {
        $earthRadius = 6371000; // Radius bumi dalam meter

        $latFrom = deg2rad($lat1);
        $lonFrom = deg2rad($lon1);
        $latTo = deg2rad($lat2);
        $lonTo = deg2rad($lon2);

        $latDelta = $latTo - $latFrom;
        $lonDelta = $lonTo - $lonFrom;

        $angle = 2 * asin(sqrt(pow(sin($latDelta / 2), 2) +
            cos($latFrom) * cos($latTo) * pow(sin($lonDelta / 2), 2)));

        return $angle * $earthRadius;
    }
}
