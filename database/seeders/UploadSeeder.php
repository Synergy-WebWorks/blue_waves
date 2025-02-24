<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UploadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 20; $i++) {
            DB::table('uploads')->insert([
                'rent_id' => $i,
                'activity_id' => rand(1, 10),
                'file' => '/images/ROOMS (2pcs)/ROOM A/A0.jpeg',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
        for ($i = 21; $i <= 40; $i++) {
            DB::table('uploads')->insert([
                'rent_id' => $i,
                'activity_id' => rand(1, 10),
                'file' => '/images/Umbrella Cottage (2pcs)/1.jpeg',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
