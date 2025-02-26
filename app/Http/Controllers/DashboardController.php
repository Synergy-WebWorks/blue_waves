<?php

namespace App\Http\Controllers;

use App\Models\BookingInfo;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        $currentYear = Carbon::now()->year;
        // Count bookings by status
        $statusCounts = [
            'pending' => BookingInfo::where('status', 'pending')->count(),
            'canceled' => BookingInfo::where('status', 'canceled')->count(),
            'partial' => BookingInfo::where('status', 'partial')->count(),
            'paid' => BookingInfo::where('status', 'paid')->count(),
        ];
        // Get monthly booking counts
        $monthlyBookingCounts = BookingInfo::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
            ->whereYear('created_at', $currentYear)
            ->groupBy(DB::raw('MONTH(created_at)'))
            ->orderBy('month')
            ->pluck('count', 'month'); // Key: month number, Value: count

        // Format with month names
        $monthlyData = [];
        for ($i = 1; $i <= 12; $i++) {
            $monthName = Carbon::create()->month($i)->format('F'); // Converts 1 -> January, 2 -> February, etc.
            $monthlyData[$monthName] = $monthlyBookingCounts[$i] ?? 0;
        }

        // Get total bookings per year and format as an associative array
        $annualData = BookingInfo::selectRaw('YEAR(created_at) as year, COUNT(*) as count')
            ->groupBy(DB::raw('YEAR(created_at)'))
            ->orderBy('year', 'asc')
            ->pluck('count', 'year') // Returns key-value pair: [ "2025" => 20, "2026" => 10 ]
            ->toArray();

        return response()->json([
            'status_count'=>$statusCounts,
            'years' => $annualData, // Associative array { "2025": 20, "2026": 10 }
            'monthlyBookings' => $monthlyData,
            'annualBookings' => $annualData[$currentYear] ?? 0 // Total for the current year
        ]);
    }
}
