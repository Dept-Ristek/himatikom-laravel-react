<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->dateTime('event_time');
            $table->string('location');
            $table->string('attendance_token')->unique(); // Token unik untuk QR code
            // $table->unsignedBigInteger('created_by'); // 1. Definisikan kolom dengan tipe data yang sama persis
            $table->foreignUuid('created_by')->constrained('users')->onDelete('cascade'); // 2. Tambahkan constraint secara manual
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
