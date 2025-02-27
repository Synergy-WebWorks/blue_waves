<?php

namespace App\Http\Controllers;

use App\Models\NonConsumableAllocation;
use Illuminate\Http\Request;

class NonConsumableController extends Controller
{

    public function index()
    {
        $non_consumable = NonConsumableAllocation::get();

        return response()->json([
            'result' => $non_consumable
        ], 200);
    }

    public function store(Request $request)
    {
        // $request->validate([
        //     'item_id' => 'nullable|exists:inventories,id',
        //     'allocation' => 'nullable|integer|min:0',
        //     'unallocated' => 'nullable|integer|min:0',
        //     'damaged' => 'nullable|date',
        // ]);

        $non_consumable_allocation = NonConsumableAllocation::create($request->all());

        return response()->json($non_consumable_allocation, 201);
    }
}
