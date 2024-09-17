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
        Schema::create('prokers', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('slug');
            $table->boolean('is_proker')->default(true);
            $table->date('schedule')->nullable();
            $table->timestamp('is_start')->nullable();
            $table->timestamp('is_end')->nullable();
            $table->boolean('need_to_register')->default(false);
            $table->timestamp('start_register')->nullable();
            $table->timestamp('end_register')->nullable();
            $table->enum('status', ['scheduled', 'process', 'finished'])->default('scheduled');
            $table->foreignUuid('kepengurusan_id')->constrained();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prokers');
    }
};
