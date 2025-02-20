<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    // Display a listing of the activities
    public function index()
    {
        return response()->json(Activity::all());
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
        ]);

        $activity = Activity::create($request->all());

        return response()->json($activity, 201);
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
