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
        Schema::create('kepanitiaan_prokers', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('proker_id')->constrained();
            $table->foreignUuid('kepanitiaan_id')->constrained();
            $table->foreignUuid('user_id')->nullable()->constrained();
            $table->enum('level', ['1', '2', '3'])->default('3');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kepanitiaan_prokers');
    }
};
