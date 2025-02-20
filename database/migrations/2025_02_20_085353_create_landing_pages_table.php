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
        Schema::create('landing_pages', function (Blueprint $table) {
            $table->id();
            $table->string('hero_title')->nullable();
            $table->string('hero_content')->nullable();
            $table->string('room_title')->nullable();
            $table->string('room_content')->nullable();
            $table->string('cottage_title')->nullable();
            $table->string('cottage_content')->nullable();
            $table->string('activity_title')->nullable();
            $table->string('activity_content')->nullable();
            $table->string('contact_title')->nullable();
            $table->string('contact_content')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('landing_pages');
    }
};
