<?php

namespace App\Http\Controllers;

use App\Models\BookingInfo;
use Illuminate\Http\Request;

class BookingInfoController extends Controller
{
    // Display a listing of the booking records
    public function index()
    {
        return response()->json(BookingInfo::all());
    }

    // Store a newly created booking record
    public function store(Request $request)
    {
        $request->validate([
            'reference_id' => 'required|string|max:255',
            'start' => 'required|date',
            'end' => 'required|date|after_or_equal:start',
            'initial' => 'required|numeric',
            'total' => 'required|numeric',
            'status' => 'required|string|max:50',
            'submitted_date' => 'required|date',
        ]);

        $booking = BookingInfo::create($request->all());

        return response()->json($booking, 201);
    }

    // Display the specified booking record
    public function show(BookingInfo $bookingInfo)
    {
        return response()->json($bookingInfo);
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
