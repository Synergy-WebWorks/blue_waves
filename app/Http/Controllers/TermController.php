<?php

namespace App\Http\Controllers;

use App\Models\Term;
use Illuminate\Http\Request;

class TermController extends Controller
{

    public function index()
    {
        $terms = Term::get();
        return response()->json([
            'result' => $terms
        ], 200);
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

    public function show($id)
    {
        $term = Term::where('id', $id)->first();

        if (!$term) {
            return response()->json([
                'status' => false,
                'message' => 'Term not found'
            ], 404);
        }

        return response()->json([
            'status' => $term,
            'data' => $term,
        ], 200);
    }


    public function update(Request $request,  $id)
    {
        $term = Term::where('id', $id)->first();
        if ($term) {
            $term->update($request->all());
        }
    }

    // Remove the specified term
    public function destroy(Term $term)
    {
        $term->delete();
        return response()->json(['message' => 'Term deleted successfully']);
    }
}
