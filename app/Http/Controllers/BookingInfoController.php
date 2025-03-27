<?php

namespace App\Http\Controllers;

use App\Models\Additional;
use App\Models\BookingInfo;
use App\Models\BookingOrder;
use App\Notifications\BookingNotification;
use App\Notifications\InvoiceNotification;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class BookingInfoController extends Controller
{
    public function checkout_data(Request $request)
    {
        $bookingInfo = BookingInfo::where('id', $request->id)->first();
        if ($bookingInfo) {
            $bookingInfo->update([
                'status' => $request->status
            ]);

            if ($request->status == 'paid') {
                $invoiceData = [
                    'id' => $bookingInfo->reference_id,
                    'customer_name' => trim("{$bookingInfo->fname} {$bookingInfo->mname} {$bookingInfo->lname}"),
                    'amount' => $bookingInfo->initial,
                    'date' => now()->format('Y-m-d'),
                    'email' => $bookingInfo->email,
                ];

                $bookingInfo->notify(new InvoiceNotification($invoiceData));
            }
        }
        return response()->json('success');
    }

    public function add_order(Request $request)
    {


        $bookingInfo = BookingInfo::where('reference_id', $request->customer['reference_id'])->first();

        if ($bookingInfo) {
            $bookingInfo->update([
                'adults' => $request->customer['adults'] + $bookingInfo->adults,
                'children' => $request->customer['children'] + $bookingInfo->children,
                'total' => $request->total_rent + $bookingInfo->total + $request->total_activity,
            ]);
            foreach ($request->selected as $key => $value) {
                BookingOrder::create([
                    'reference_id' => $request->customer['reference_id'],
                    'rent_id' => $value['id'],
                    'started_at' => $request->start,
                    'end_at' => $request->end,
                    'duration' => $request->gap,
                    'sub_total' => $value['rate'] *  $request->gap,
                ]);
            }
            foreach ($request->activities as $key => $value) {
                Additional::create([
                    'reference_id'=>$request->customer['reference_id'],
                    'activity_id' => $value['id'],
                    'rate' => $value['rate'],
                    'quantity' => $value['quantity'],
                    'total' => intval($value['rate']) * intval($value['quantity']),
                ]);
            }
            return response()->json('success');
        }
    }
    public function get_calendar(Request $request)
    {
        $year = $request->input('year', Carbon::now()->year);

        // Get first and last day of the given year
        $startDate = Carbon::create($year, 1, 1)->startOfYear()->toDateString();  // "2025-01-01"
        $endDate = Carbon::create($year, 12, 31)->endOfYear()->toDateString();  // "2025-12-31"


        // Fetch only bookings where the 'start' date is within the specified year
        $bookings = BookingInfo::whereBetween(DB::raw("STR_TO_DATE(start, '%M %d, %Y')"), [$startDate, $endDate])
            ->orderBy(DB::raw("STR_TO_DATE(start, '%M %d, %Y')"), 'asc')
            ->get();

        return response()->json($bookings);
    }



    public function index(Request $request)
    {
        $query = BookingInfo::query();

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        $bookings = $query->orderBy('id', 'desc')->paginate(10);

        return response()->json($bookings);
    }




    // Store a newly created booking record
    public function store(Request $request)
    {


        $booking = BookingInfo::create([
            'reference_id' => $request->reference_id,
            'start' => $request->start,
            'end' => $request->end,
            'email' => $request->email,
            'mobile' => $request->mobile,
            'fname' => $request->fname,
            'mname' => $request->mname,
            'lname' => $request->lname,
            'suffix' => $request->suffix,
            'address' => $request->address,
            'initial' => $request->initial,
            'total' => $request->total,
            'children' => $request->children,
            'adults' => $request->adults,
            'status' => $request->status,
            'submitted_date' => $request->submitted_date,
        ]);
        foreach ($request->selected as $key => $value) {
            BookingOrder::create([
                'reference_id' => $request->reference_id,
                'rent_id' => $value['id'],
                'started_at' => $request->start,
                'end_at' => $request->end,
                'duration' => $request->gap,
                'sub_total' => $value['rate'],
            ]);
        }
        if ($request->processed_by === 'admin') {
            $booking->notify(new BookingNotification($booking));
        }

        return response()->json($booking, 200);
    }

    // Display the specified booking record
    public function show($id)
    {
        $bookingInfo = BookingInfo::where('reference_id', $id)->with(['booking_orders','additionals'])->first();
        return response()->json($bookingInfo, 200);
    }

    // Update the specified booking record
    public function update(Request $request, BookingInfo $bookingInfo)
    {
        $request->validate([
            'reference_id' => 'sometimes|required|string|max:255',
            'start' => 'sometimes|required|date',
            'end' => 'sometimes|required|date|after_or_equal:start',
            'initial' => 'sometimes|required|numeric',
            'total' => 'sometimes|required|numeric',
            'status' => 'sometimes|required|string|max:50',
            'submitted_date' => 'sometimes|required|date',
        ]);

        $bookingInfo->update($request->all());

        return response()->json($bookingInfo);
    }

    // Remove the specified booking record
    public function destroy(BookingInfo $bookingInfo)
    {
        $bookingInfo->delete();
        return response()->json(['message' => 'Booking record deleted successfully']);
    }
}
