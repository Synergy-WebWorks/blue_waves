<?php

namespace App\Http\Controllers;

use App\Models\Resort;
use Illuminate\Http\Request;

class ResortController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resorts = Resort::all();
        return response()->json($resorts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'address' => 'required|string|max:255',
            'contact' => 'required|string|max:20',
            'email' => 'required|email|unique:resorts,email',
        ]);

        $resort = Resort::create($request->all());

        return response()->json($resort, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Resort $resort)
    {
        return response()->json($resort);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resort $resort)
    {
        $request->validate([
            'address' => 'sometimes|string|max:255',
            'contact' => 'sometimes|string|max:20',
            'email' => 'sometimes|email|unique:resorts,email,' . $resort->id,
        ]);

        $resort->update($request->all());

        return response()->json($resort);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resort $resort)
    {
        $resort->delete();
        return response()->json(['message' => 'Deleted successfully'], 204);
    }
}
