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
        Schema::create('t_surat_log_tabs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('t_surat_tabs_id');
            $table->unsignedBigInteger('m_user_tabs_id');
            $table->integer('queue')->default(1);
            $table->tinyInteger('status')->default(0);
            $table->string('disposisi');
            $table->timestamps();
            $table->foreign('t_surat_tabs_id')->on('t_surat_tabs')->references('id')->cascadeOnDelete();
            $table->foreign('m_user_tabs_id')->on('m_user_tabs')->references('id')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('t_surat_log_tabs');
    }
};
