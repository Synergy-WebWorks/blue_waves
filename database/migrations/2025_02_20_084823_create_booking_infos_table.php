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
        Schema::create('booking_infos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('reference_id')->nullable();
            $table->string('start')->nullable();
            $table->string('end')->nullable();
            $table->string('initial')->nullable();
            $table->string('total')->nullable();
            $table->string('status')->nullable();
            $table->string('submitted_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_infos');
    }
};
