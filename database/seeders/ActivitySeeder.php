<?php

namespace Database\Seeders;

use App\Models\Activity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
   
        Activity::create([
            'name' =>'Videoke',
            'rate' =>'100',
            'unit' => 'videoke',
            'quantity' => '1',
            'description' =>'Sing a long videoke',
        ]);

        Activity::create([
            'name' =>'Kayak',
            'rate' =>'100',
            'unit' => 'Kayak 101',
            'quantity' => '1',
            'description' =>'Sing a long videoke',
        ]);

        Activity::create([
            'name' =>'Banana Boat',
            'rate' =>'100',
            'unit' => 'Banana Boat 101',
            'quantity' => '1',
            'description' =>'Sing a long videoke',
        ]);

        Activity::create([
            'name' =>'Floating Cottage',
            'rate' =>'500',
            'unit' => 'Floating Cottage 101',
            'quantity' => '1',
            'description' =>'Sing a long videoke',
        ]);
    }
}
