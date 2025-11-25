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
        Schema::create('attendances', function (Blueprint $table) {
        $table->id();
        $table->foreignId('event_id')->constrained()->onDelete('cascade');
        $table->foreignUuid('user_id')->constrained()->onDelete('cascade');
        $table->timestamp('attended_at')->useCurrent();
        $table->timestamps(); // Cukup satu kali

        $table->unique(['event_id', 'user_id']);
    });
    }

    public function down(): void
    {
        Schema::dropIfExists('attendances');
    }
};
