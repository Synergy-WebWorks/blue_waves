<?php

namespace Database\Seeders;

use App\Models\BookingInfo;
use App\Models\BookingOrder;
use App\Models\Rent;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Faker\Factory as Faker;

class BookingInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        for ($i = 1; $i <= 20; $i++) {
            // $startDate = Carbon::now()->subDays(rand(1, 30))->format('F d, Y'); // Format: February 26, 2025
            // $endDate = Carbon::now()->addDays(rand(1, 30))->format('F d, Y');
            $startDate = Carbon::now()->subDays(rand(1, 30));
            $endDate = Carbon::now()->addDays(rand(1, 30));
            $total = rand(1000, 10000);
            $duration = $startDate->diffInDays($endDate);
            $rent = Rent::where('id', $i)->first();
            $faker = Faker::create();


            $bi = BookingInfo::create([
                'reference_id' => rand(100000000009, 999999999999), // 10-digit random reference ID
                'start' => $startDate->format('F d, Y'), // Formatted start date
                'end' => $endDate->format('F d, Y'), // Formatted end date
                'email' => "user$i@example.com",
                'mobile' => '09' . rand(100000000, 999999999), // Philippine mobile format
                'fname' => $faker->firstName,
                'mname' => $faker->firstName,
                'lname' => $faker->lastName,
                'suffix' => rand(0, 1) ? 'Jr.' : '',
                'address' => 'Street ' . rand(1, 100) . ', City ' . rand(1, 50),
                'initial' => ($duration * $rent->rate) / 2,
                'adults' => 80,
                'children' => 40,
                'total' => ($duration * $rent->rate), // Total cost
                'status' => ['pending', 'paid', 'canceled', 'partial'][array_rand(['pending', 'paid', 'canceled', 'partial'])], // Fixed status array
                'submitted_date' => now()->toDateTimeString(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            if ($rent) {
                BookingOrder::create([
                    'reference_id' => $bi->reference_id,
                    'rent_id' => $i,
                    'started_at' => $bi->start,
                    'end_at' => $bi->end,
                    'duration' => $duration,
                    'sub_total' => $duration * $rent->rate,
                ]);
            }
        }
    }
}
