<?php

namespace App\Http\Controllers;

use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $uploads = Upload::all();
        return response()->json($uploads);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'rent_id' => 'required|exists:rents,id',
            'activity_id' => 'required|exists:activities,id',
            'user_id' => 'required|exists:users,id',
            'file' => 'required|file|mimes:jpg,jpeg,png,pdf,doc,docx|max:2048',
        ]);

        // Store the file
        $path = $request->file('file')->store('uploads', 'public');

        $upload = Upload::create([
            'rent_id' => $request->rent_id,
            'activity_id' => $request->activity_id,
            'user_id' => $request->user_id,
            'file' => $path,
        ]);

        return response()->json($upload, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Upload $upload)
    {
        return response()->json($upload);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Upload $upload)
    {
        $request->validate([
            'rent_id' => 'sometimes|exists:rents,id',
            'activity_id' => 'sometimes|exists:activities,id',
            'user_id' => 'sometimes|exists:users,id',
            'file' => 'sometimes|file|mimes:jpg,jpeg,png,pdf,doc,docx|max:2048',
        ]);

        if ($request->hasFile('file')) {
            // Delete old file
            Storage::disk('public')->delete($upload->file);
            // Store new file
            $path = $request->file('file')->store('uploads', 'public');
            $upload->file = $path;
        }

        $upload->update($request->except('file'));

        return response()->json($upload);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Upload $upload)
    {
        // Delete file from storage
        Storage::disk('public')->delete($upload->file);
        $upload->delete();

        return response()->json(['message' => 'Deleted successfully'], 204);
    }
}
