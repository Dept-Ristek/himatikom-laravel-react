<?php

// app/Exports/EventAttendanceExport.php
namespace App\Exports;

use App\Models\Event;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class EventAttendanceExport implements FromCollection, WithHeadings, WithMapping
{
    protected $event;

    public function __construct(Event $event)
    {
        $this->event = $event;
    }

    public function collection()
    {
        return $this->event->attendances()->with('user')->get();
    }

    public function headings(): array
    {
        return [
            'NIM',
            'Nama Peserta',
            'Waktu Absen',
        ];
    }

    public function map($attendance): array
    {
        return [
            $attendance->user->nim,
            $attendance->user->name,
            $attendance->attended_at->format('d M Y H:i:s'),
        ];
    }
}
