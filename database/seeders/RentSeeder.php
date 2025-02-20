<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = ['room', 'cottage'];

        for ($i = 1; $i <= 20; $i++) {
            DB::table('rents')->insert([
                'name' => 'Room ' . $i,
                'rate' => rand(100, 1000),
                'min_capacity' => rand(1, 5),
                'max_capacity' => rand(6, 15),
                'description' => 'Description for room ' . $i,
                'type' => 'room',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
        for ($i = 1; $i <= 20; $i++) {
            DB::table('rents')->insert([
                'name' => 'Cottage ' . $i,
                'rate' => rand(100, 1000),
                'min_capacity' => rand(1, 5),
                'max_capacity' => rand(6, 15),
                'description' => 'Description for cottage ' . $i,
                'type' => 'cottage',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
