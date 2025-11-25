<?php
// database/migrations/xxxx_xx_xx_xxxxxx_update_events_table_for_time_and_location.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('events', function (Blueprint $table) {
            // Ganti event_time menjadi start_time
            $table->renameColumn('event_time', 'start_time');

            // Tambahkan kolom baru setelah start_time (INI YANG DIPERBAIKI)
            $table->dateTime('end_time')->nullable()->after('start_time');

            // Tambahkan kolom untuk koordinat lokasi event
            $table->decimal('latitude', 10, 7)->nullable()->after('location');
            $table->decimal('longitude', 10, 7)->nullable()->after('latitude');
        });
    }

    public function down(): void
    {
        Schema::table('events', function (Blueprint $table) {
            $table->renameColumn('start_time', 'event_time');
            $table->dropColumn(['end_time', 'latitude', 'longitude']);
        });
    }
};
