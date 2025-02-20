<?php

namespace App\Http\Controllers;

use App\Models\Rent;
use Illuminate\Http\Request;

class RentController extends Controller
{
    // Display a listing of the rent items
    public function index()
    {
        return response()->json(Rent::all());
    }

    // Store a newly created rent item
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'rate' => 'required|numeric|min:0',
            'min_capacity' => 'required|integer|min:1',
            'max_capacity' => 'required|integer|gte:min_capacity',
            'description' => 'nullable|string',
            'type' => 'required|string|max:100',
        ]);

        $rent = Rent::create($request->all());

        return response()->json($rent, 201);
    }

    // Display the specified rent item
    public function show(Rent $rent)
    {
        return response()->json($rent);
    }

    // Update the specified rent item
    public function update(Request $request, Rent $rent)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'rate' => 'sometimes|required|numeric|min:0',
            'min_capacity' => 'sometimes|required|integer|min:1',
            'max_capacity' => 'sometimes|required|integer|gte:min_capacity',
            'description' => 'sometimes|nullable|string',
            'type' => 'sometimes|required|string|max:100',
        ]);

        $rent->update($request->all());

        return response()->json($rent);
    }

    // Remove the specified rent item
    public function destroy(Rent $rent)
    {
        $rent->delete();
        return response()->json(['message' => 'Rent item deleted successfully']);
    }
}
