<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            ActivitySeeder::class,
            BookingInfoSeeder::class,
            BookingOrderSeeder::class,
            InventoryAllocationSeeder::class,
            InventorySeeder::class,
            InventoryStockSeeder::class,
            LandingPageSeeder::class,
            RentSeeder::class,
            ResortSeeder::class,
            TermSeeder::class,
            UploadSeeder::class,
        ]);
    }
}
