<?php
namespace App\Http\Controllers;

use App\Models\Inventory;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    // Display a listing of the inventory items
    public function index()
    {
        return response()->json(Inventory::all());
    }

    // Store a newly created inventory item
    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'brand' => 'nullable|string|max:255',
            'quantity' => 'required|integer|min:0',
            'status' => 'required|string|max:50',
        ]);

        $inventory = Inventory::create($request->all());

        return response()->json($inventory, 201);
    }

    // Display the specified inventory item
    public function show(Inventory $inventory)
    {
        return response()->json($inventory);
    }

    // Update the specified inventory item
    public function update(Request $request, Inventory $inventory)
    {
        $request->validate([
            'type' => 'sometimes|required|string|max:255',
            'name' => 'sometimes|required|string|max:255',
            'brand' => 'sometimes|nullable|string|max:255',
            'quantity' => 'sometimes|required|integer|min:0',
            'status' => 'sometimes|required|string|max:50',
        ]);

        $inventory->update($request->all());

        return response()->json($inventory);
    }

    // Remove the specified inventory item
    public function destroy(Inventory $inventory)
    {
        $inventory->delete();
        return response()->json(['message' => 'Inventory item deleted successfully']);
    }
}
