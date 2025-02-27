<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use App\Models\InventoryAllocation;
use Illuminate\Http\Request;

class InventoryAllocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $inventoriy_allocation = InventoryAllocation::get();

        return response()->json([
            'result' => $inventoriy_allocation
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate incoming request
        // $request->validate([
        //     'type' => 'nullable|string|max:255',
        //     'name' => 'nullable|string|max:255',
        //     'brand' => 'nullable|string|max:255',
        //     'quantity' => 'nullable|integer|min:0',
        //     'status' => 'nullable|string|max:50',
        // ]);

        $inventoryAllocation = InventoryAllocation::create($request->all());

        $invent = Inventory::where('id', $request->item_id)->first();

        if ($invent) {
            // Calculate the new inventory quantity after allocation
            $newQuantity = $invent->quantity - $request->quantity;

            // Ensure that the quantity does not go below zero
            if ($newQuantity < 0) {
                return response()->json(['error' => 'Insufficient stock available.'], 400);
            }

            // Update the inventory with the new quantity
            $invent->update(['quantity' => $newQuantity]);
        } else {
            // Return an error if the inventory item is not found
            return response()->json(['error' => 'Inventory item not found.'], 404);
        }

        // Return the created inventory allocation as a response
        return response()->json($inventoryAllocation, 201);
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $inventory = InventoryAllocation::where('id', $id)->with(['inventory'])->first();
        return response()->json([
            'status' => $inventory,
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InventoryAllocation $inventoryAllocation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InventoryAllocation $inventoryAllocation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InventoryAllocation $inventoryAllocation)
    {
        //
    }
}
