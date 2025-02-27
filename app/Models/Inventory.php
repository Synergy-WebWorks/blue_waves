<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Inventory extends Model
{
    use HasFactory;
    protected $fillable = [
        'type',
        'name',
        'brand',
        'quantity',
        'status',
    ];

    public function inventory_allocation(): HasMany
    {
        return $this->hasMany(InventoryAllocation::class);
    }
    
}