<?php

namespace App\Http\Controllers;

use App\Models\LandingPage;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    // Display a listing of the landing pages
    public function index()
    {
        return response()->json(LandingPage::all());
    }

    // Store a newly created landing page
    public function store(Request $request)
    {
        $request->validate([
            'hero_title' => 'required|string|max:255',
            'hero_content' => 'required|string',
            'room_title' => 'required|string|max:255',
            'room_content' => 'required|string',
            'cottage_title' => 'required|string|max:255',
            'cottage_content' => 'required|string',
            'activity_title' => 'required|string|max:255',
            'activity_content' => 'required|string',
            'contact_title' => 'required|string|max:255',
            'contact_content' => 'required|string',
        ]);

        $landingPage = LandingPage::create($request->all());

        return response()->json($landingPage, 201);
    }

    // Display the specified landing page
    public function show(LandingPage $landingPage)
    {
        return response()->json($landingPage);
    }

    // Update the specified landing page
    public function update(Request $request, LandingPage $landingPage)
    {
        $request->validate([
            'hero_title' => 'sometimes|required|string|max:255',
            'hero_content' => 'sometimes|required|string',
            'room_title' => 'sometimes|required|string|max:255',
            'room_content' => 'sometimes|required|string',
            'cottage_title' => 'sometimes|required|string|max:255',
            'cottage_content' => 'sometimes|required|string',
            'activity_title' => 'sometimes|required|string|max:255',
            'activity_content' => 'sometimes|required|string',
            'contact_title' => 'sometimes|required|string|max:255',
            'contact_content' => 'sometimes|required|string',
        ]);

        $landingPage->update($request->all());

        return response()->json($landingPage);
    }

    // Remove the specified landing page
    public function destroy(LandingPage $landingPage)
    {
        $landingPage->delete();
        return response()->json(['message' => 'Landing page deleted successfully']);
    }
}
