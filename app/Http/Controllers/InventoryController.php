<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use App\Models\InventoryStock;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    public function index()
    {
        $inventories = Inventory::get();

        // Loop through the inventories to update status based on quantity for Consumable items
        foreach ($inventories as $inventory) {
            if ($inventory->type === 'Consumable') {
                if ($inventory->quantity == 0) {
                    $inventory->status = 'Out of Stock';
                } elseif ($inventory->quantity >= 1 && $inventory->quantity <= 10) {
                    $inventory->status = 'Low Stock';
                } else {
                    $inventory->status = 'In Stock';
                }
            }
        }

        return response()->json([
            'result' => $inventories
        ], 200);
    }




    // Store a newly created inventory item
    public function store(Request $request)
    {
        $request->validate([
            'type' => 'nullable|string|max:255',
            'name' => 'nullable|string|max:255',
            'brand' => 'nullable|string|max:255',
            'quantity' => 'nullable|integer|min:0',
            'status' => 'nullable|string|max:50',
        ]);

        $inventory = Inventory::create($request->all());

        return response()->json($inventory, 201);
    }

    // Display the specified inventory item
    public function show($id)
    {
        $inventory = Inventory::where('id', $id)->first();
        return response()->json([
            'status' => $inventory,
        ], 200);
    }

    // Update the specified inventory item
    public function update(Request $request, Inventory $inventory)
    {
        // Validate incoming request data
        $request->validate([
            'type' => 'sometimes|required|string|max:255',
            'name' => 'sometimes|required|string|max:255',
            'brand' => 'sometimes|nullable|string|max:255',
            'quantity' => 'sometimes|nullable|integer|min:0',
            'status' => 'sometimes|nullable|string|max:50',
            'received' => 'sometimes|nullable|date',
        ]);

        if ($request->has('quantity')) {
            $inventory->quantity += $request->input('quantity');
        }

        $inventory->update($request->except('quantity'));

        $remainingStock = max(0, $inventory->quantity - $request->input('quantity', 0));

        $inventoryStock = InventoryStock::create([
            'inventory_id' => $inventory->id,
            'remaining' => $remainingStock,
            'added' => $request->input('quantity', 0),
            'received_date' => $request->input('received'),
        ]);

        // Return the updated inventory as a response
        return response()->json($inventory, 200);
    }






    // Remove the specified inventory item
    public function destroy(Inventory $inventory)
    {
        $inventory->delete();
        return response()->json(['message' => 'Inventory item deleted successfully']);
    }
}
