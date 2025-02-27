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
        Schema::create('non_consumable_allocation', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('item_id')->nullable();
            $table->string('allocation')->nullable();
            $table->string('unallocated')->nullable();
            $table->string('damaged')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('non_consumable_allocation');
    }
};
