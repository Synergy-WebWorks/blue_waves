<?php

namespace Database\Seeders;

use App\Models\BookingInfo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookingInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 20; $i++) {
            $booking_info = DB::table('booking_infos')->insert([
                'reference_id' => rand(1000, 9999),
                'start' => now()->subDays(rand(1, 30))->toDateTimeString(),
                'end' => now()->addDays(rand(1, 30))->toDateTimeString(),
                'total' => rand(100, 1000),
                'initial' => rand(50, 500),
                'status' => ['pending', 'confirmed', 'canceled'][array_rand(['pending', 'confirmed', 'canceled'])],
                'submitted_date' => now()->toDateTimeString(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

        //    $bo= DB::table('booking_orders')->insert([
        //         'reference_id' => $booking_info['reference_id'],
        //         'rent_id' => $i,
        //         'activity_id' => rand(1, 10),
        //         'started_at' => now()->subDays(rand(1, 30))->toDateTimeString(),
        //         'end_at' => now()->addDays(rand(1, 30))->toDateTimeString(),
        //         'duration' => rand(1, 10) . ' hours',
        //         'sub_total' => rand(50, 1000),
        //         'created_at' => now(),
        //         'updated_at' => now(),
        //     ]);

        //    $bi= BookingInfo::where('reference_id',$booking_info['reference_id']);
        //    if ($bi) {
        //     $bi->update([
        //         'total'=>$bo['sub_total']
        //     ]);
        //    }
        }
    }
}
