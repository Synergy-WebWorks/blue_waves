<?php

namespace App\Http\Controllers;

use App\Models\InventoryStock;
use Illuminate\Http\Request;

class InventoryStockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $inventoryStocks = InventoryStock::all();
        return response()->json($inventoryStocks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'inventory_id' => 'required|exists:inventories,id',
            'remaining' => 'required|integer|min:0',
            'added' => 'required|integer|min:0',
            'received_date' => 'required|date',
        ]);

        $inventoryStock = InventoryStock::create($request->all());

        return response()->json($inventoryStock, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(InventoryStock $inventoryStock)
    {
        return response()->json($inventoryStock);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InventoryStock $inventoryStock)
    {
        $request->validate([
            'inventory_id' => 'sometimes|exists:inventories,id',
            'remaining' => 'sometimes|integer|min:0',
            'added' => 'sometimes|integer|min:0',
            'received_date' => 'sometimes|date',
        ]);

        $inventoryStock->update($request->all());

        return response()->json($inventoryStock);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InventoryStock $inventoryStock)
    {
        $inventoryStock->delete();
        return response()->json(['message' => 'Deleted successfully'], 204);
    }
}
