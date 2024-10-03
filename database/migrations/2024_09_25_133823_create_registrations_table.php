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
        Schema::create('registrations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('proker_id')->constrained();
            $table->foreignUuid('kepanitiaan_id')->constrained();
            $table->foreignUuid('user_id')->constrained();
            $table->text('reasons')->nullable();
            $table->boolean('is_accepted')->nullable();
            $table->enum('level', ['1', '2', '3'])->nullable()->default('3'); // ['Ketua', 'Wakil', 'Anggota']
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};
