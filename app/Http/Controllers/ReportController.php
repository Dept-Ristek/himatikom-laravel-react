<?php

// app/Http/Controllers/ReportController.php
namespace App\Http\Controllers;

use App\Models\Event;
use App\Exports\EventAttendanceExport;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Str;

class ReportController extends Controller
{
    // Laporan untuk user yang login
    public function userReport()
    {
        $attendances = Auth::user()->attendances()->with('event')->latest('attended_at')->paginate(10);
        return Inertia::render('Reports/UserReport', ['attendances' => $attendances]);
    }

    // Fungsi untuk export data event ke Excel
    public function exportExcel(Event $event)
    {
        // Tambahkan otorisasi jika perlu
        return Excel::download(new EventAttendanceExport($event), 'laporan-kehadiran-' . Str::slug($event->name) . '.xlsx');
    }
}
