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
            $table->string('email')->nullable();
            $table->string('mobile')->nullable();
            $table->string('fname')->nullable();
            $table->string('mname')->nullable();
            $table->string('lname')->nullable();
            $table->string('suffix')->nullable();
            $table->string('address')->nullable();
            $table->string('initial')->nullable();
            $table->string('adults')->nullable();
            $table->string('children')->nullable();
            $table->string('total')->nullable();
            $table->string('status')->nullable();
            $table->string('payment_type')->nullable();
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
