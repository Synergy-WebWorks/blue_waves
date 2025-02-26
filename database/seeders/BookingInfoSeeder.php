<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class BookingInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        for ($i = 1; $i <= 20; $i++) {
            $startDate = Carbon::now()->subDays(rand(1, 30))->format('F d, Y'); // Format: February 26, 2025
            $endDate = Carbon::now()->addDays(rand(1, 30))->format('F d, Y');

            DB::table('booking_infos')->insert([
                'reference_id' => rand(1000000000, 9999999999), // 10-digit random reference ID
                'start' => $startDate, // Formatted start date
                'end' => $endDate, // Formatted end date
                'email' => "user$i@example.com",
                'mobile' => '09' . rand(100000000, 999999999), // Philippine mobile format
                'fname' => Str::random(6),
                'mname' => Str::random(4),
                'lname' => Str::random(6),
                'suffix' => rand(0, 1) ? 'Jr.' : '',
                'address' => 'Street ' . rand(1, 100) . ', City ' . rand(1, 50),
                'initial' => strtoupper(Str::random(3)),
                'adults' => rand(1, 5),
                'children' => rand(0, 3),
                'total' => rand(1000, 10000), // Total cost
                'status' => ['pending', 'paid', 'canceled', 'partial'][array_rand(['pending', 'paid', 'canceled', 'partial'])], // Fixed status array
                'submitted_date' => now()->toDateTimeString(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
