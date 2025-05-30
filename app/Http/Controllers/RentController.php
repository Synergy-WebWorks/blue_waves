<?php

namespace App\Http\Controllers;

use App\Models\BookingOrder;
use App\Models\Rent;
use App\Models\Upload;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class RentController extends Controller
{
    // Display a listing of the rent items
    public function index(Request $request)
    {
        // Convert input dates to Y-m-d format
        $startDate = Carbon::parse($request->start)->format('Y-m-d');
        $endDate = Carbon::parse($request->end)->format('Y-m-d');

        $bookings = BookingOrder::whereHas('booking_info', function ($q) {
            $q->where('status', '=', 'partial'); // Filter non-pending bookings
        })
            ->where(function ($q) use ($startDate, $endDate) {
                $q->whereBetween(DB::raw("STR_TO_DATE(started_at, '%M %d, %Y')"), [$startDate, $endDate])
                    ->orWhereBetween(DB::raw("STR_TO_DATE(end_at, '%M %d, %Y')"), [$startDate, $endDate])
                    ->orWhereRaw("STR_TO_DATE(started_at, '%M %d, %Y') <= ? AND STR_TO_DATE(end_at, '%M %d, %Y') >= ?", [$startDate, $endDate]);
            })
            ->pluck('rent_id')
            ->toArray();
        // Extract rent IDs only

        $rents = Rent::whereNotIn('id', $bookings)->with(['uploads'])->get();

        return response()->json([
            'result' => $rents,
        ], 200);
    }

    // Store a newly created rent item
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'rate' => 'required|numeric',
            'min_capacity' => 'required|integer',
            'max_capacity' => 'required|integer',
            'description' => 'nullable|string',
            'type' => 'nullable|string',
            'status' => 'nullable|string',
        ]);

        $rent = Rent::create($request->only([
            'name',
            'rate',
            'min_capacity',
            'max_capacity',
            'description',
            'type',
            'status'
        ]));

        $this->handleFileUploads($request, 'uploads', $rent);

        return response()->json([
            'status' => 'success',
            'data' => $rent,
        ], 200);
    }

    private function handleFileUploads(Request $request, string $fileType, Rent $rent)
    {
        if ($request->hasFile($fileType)) {
            $files = $request->file($fileType);
            foreach ($files as $file) {
                // Store the file in S3
                $path = $file->store('Personal-' . date("Y"), 's3'); // Store in year-based folder
                $url = Storage::disk('s3')->url($path); // Get file URL from S3

                // Save file information in the FileUpload model
                Upload::create([
                    'rent_id' => $rent->id, // Link the file to the application using its ID
                    'file' => $url, // Save the file URL
                ]);
            }
        }
    }

    // Display the specified rent item
    public function show(Rent $rent)
    {
        return response()->json($rent);
    }

    // Update the specified rent item
    public function update_rent(Request $request)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'rate' => 'sometimes|required|numeric|min:0',
            'min_capacity' => 'sometimes|required|integer|min:1',
            'max_capacity' => 'sometimes|required|integer|gte:min_capacity',
            'description' => 'sometimes|nullable|string',
            'type' => 'sometimes|required|string|max:100',
        ]);
        $rent = Rent::where('id', $request->id)->first();
        if ($rent) {
            $rent->update($request->all());
        }

        return response()->json($rent);
    }

    // Remove the specified rent item
    public function destroy(Rent $rent)
    {
        $rent->delete();
        return response()->json(['message' => 'Rent item deleted successfully']);
    }
}
