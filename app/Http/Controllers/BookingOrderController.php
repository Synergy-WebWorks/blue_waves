<?php

namespace App\Http\Controllers;

use App\Models\BookingOrder;
use Illuminate\Http\Request;

class BookingOrderController extends Controller
{
    // Display a listing of the booking orders
    public function index()
    {
        return response()->json(BookingOrder::all());
    }

    // Store a newly created booking order
    public function store(Request $request)
    {
        $request->validate([
            'reference_id' => 'required|string|max:255',
            'rent_id' => 'required|integer',
            'activity_id' => 'required|integer',
            'started_at' => 'required|date',
            'end_at' => 'required|date|after_or_equal:started_at',
            'duration' => 'required|integer|min:1',
            'sub_total' => 'required|numeric|min:0',
        ]);

        $bookingOrder = BookingOrder::create($request->all());

        return response()->json($bookingOrder, 201);
    }

    // Display the specified booking order
    public function show(BookingOrder $bookingOrder)
    {
        return response()->json($bookingOrder);
    }

    // Update the specified booking order
    public function update(Request $request, BookingOrder $bookingOrder)
    {
        $request->validate([
            'reference_id' => 'sometimes|required|string|max:255',
            'rent_id' => 'sometimes|required|integer',
            'activity_id' => 'sometimes|required|integer',
            'started_at' => 'sometimes|required|date',
            'end_at' => 'sometimes|required|date|after_or_equal:started_at',
            'duration' => 'sometimes|required|integer|min:1',
            'sub_total' => 'sometimes|required|numeric|min:0',
        ]);

        $bookingOrder->update($request->all());

        return response()->json($bookingOrder);
    }

    // Remove the specified booking order
    public function destroy(BookingOrder $bookingOrder)
    {
        $bookingOrder->delete();
        return response()->json(['message' => 'Booking order deleted successfully']);
    }
}
