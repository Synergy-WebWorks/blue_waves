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
            DB::table('booking_infos')->insert([
                'reference_id' => rand(1000000000, 9999999999), // 10-digit random reference ID
                'start' => now()->subDays(rand(1, 30))->toDateString(),
                'end' => now()->addDays(rand(1, 30))->toDateString(),
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
                'status' => ['pending', 'paid', 'canceled', 'failed', 'partial'][array_rand(['pending', 'paid', 'canceled', 'partial'])],
                'submitted_date' => now()->toDateTimeString(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
