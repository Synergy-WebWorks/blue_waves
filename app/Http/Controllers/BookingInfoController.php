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

        $booking = BookingInfo::create([
            'reference_id' =>$request->reference_id,
            'start' =>$request->start,
            'end' =>$request->end,
            'email' =>$request->email,
            'mobile' =>$request->mobile,
            'fname' =>$request->fname,
            'mname' =>$request->mname,
            'lname' =>$request->lname,
            'suffix' =>$request->suffix,
            'address' =>$request->address,
            'initial' =>$request->initial,
            'total' =>$request->total,
            'children' =>$request->children,
            'adults' =>$request->adults,
            'status' =>$request->status,
            'submitted_date' =>$request->submitted_date,
        ]);

        return response()->json($booking, 200);
    }

    // Display the specified booking record
    public function show($id)
    {
        $bookingInfo =BookingInfo::where('reference_id',$id)->first();
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
