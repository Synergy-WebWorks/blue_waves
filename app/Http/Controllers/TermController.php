<?php

namespace App\Http\Controllers;

use App\Models\Term;
use Illuminate\Http\Request;

class TermController extends Controller
{
    // Display a listing of terms
    public function index()
    {
        return response()->json(Term::all());
    }

    // Store a newly created term
    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|string',
        ]);

        $term = Term::create($request->all());

        return response()->json($term, 201);
    }

    // Display the specified term
    public function show(Term $term)
    {
        return response()->json($term);
    }

    // Update the specified term
    public function update(Request $request, Term $term)
    {
        $request->validate([
            'content' => 'sometimes|required|string',
        ]);

        $term->update($request->all());

        return response()->json($term);
    }

    // Remove the specified term
    public function destroy(Term $term)
    {
        $term->delete();
        return response()->json(['message' => 'Term deleted successfully']);
    }
}
