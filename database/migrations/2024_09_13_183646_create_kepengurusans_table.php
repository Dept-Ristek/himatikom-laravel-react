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
        Schema::create('kepengurusans', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->text('description');
            $table->string('periode', 4);
            $table->string('poster')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kepengurusans');
    }
};
