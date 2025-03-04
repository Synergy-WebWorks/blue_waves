<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ActivityController extends Controller
{
    // Display a listing of the activities
    public function index()
    {
        $activities = Activity::with(['uploads'])->get();
        return response()->json([
            'result' => $activities
        ], 200);
    }

    // Store a newly created activity
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'rate' => 'required|numeric',
            'unit' => 'required|string|max:50',
            'quantity' => 'required|integer',
            'intro' => 'nullable|string',
            'description' => 'nullable|string',
            'status' => 'nullable|string',
        ]);

        $activity = Activity::create($request->only([
            'name',
            'rate',
            'unit',
            'quantity',
            'intro',
            'description',
            'status',
        ]));

        $this->handleFileUploads($request, 'uploads', $activity);

        return response()->json([
            'status' => 'success',
            'data' => $activity,
        ], 200);
    }

    private function handleFileUploads(Request $request, string $fileType, Activity $application)
    {
        if ($request->hasFile($fileType)) {
            $files = $request->file($fileType);
            foreach ($files as $file) {
                // Store the file in S3
                $path = $file->store('Personal-' . date("Y"), 's3'); // Store in year-based folder
                $url = Storage::disk('s3')->url($path); // Get file URL from S3

                // Save file information in the FileUpload model
                Upload::create([
                    'activity_id' => $application->id, // Link the file to the application using its ID
                    'file' => $url, // Save the file URL
                ]);
            }
        }
    }

    // Display the specified activity
    public function show(Activity $activity)
    {
        return response()->json($activity);
    }

    // Update the specified activity
    public function update(Request $request, Activity $activity)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'rate' => 'sometimes|required|numeric',
            'unit' => 'sometimes|required|string|max:50',
            'quantity' => 'sometimes|required|integer',
            'intro' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $activity->update($request->all());

        return response()->json($activity);
    }

    // Remove the specified activity
    public function destroy(Activity $activity)
    {
        $activity->delete();
        return response()->json(['message' => 'Activity deleted successfully']);
    }
}
