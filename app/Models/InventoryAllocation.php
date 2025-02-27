<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class InventoryAllocation extends Model
{
    use HasFactory;
    protected $fillable = [
        'inventory_id',
        'item_id',
        'allocation',
        'quantity',
        'consumed',
        'status',
    ];

    public function inventory(): HasOne
    {
        return $this->hasOne(Inventory::class);
    }
}
