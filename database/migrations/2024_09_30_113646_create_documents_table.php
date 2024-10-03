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
        Schema::create('documents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('user_id')->constrained();
            $table->enum('tag', ['sertifikat', 'proposal', 'surat'])->default('surat');
            $table->enum('type', ['surat-masuk', 'surat-keluar'])->nullable()->default('surat-masuk');
            $table->string('filepath')->nullable();
            $table->text('description')->nullable();
            $table->string('doc_from')->nullable();
            $table->string('doc_to')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
