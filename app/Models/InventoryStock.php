<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class InventoryStock extends Model
{
    use HasFactory;
    protected $fillable = [
        'inventory_id',
        'remaining',
        'added',
        'received_date',
    ];

    public function inventory(): HasOne
    {
        return $this->hasOne(Inventory::class, 'id', 'inventory_id');
    }
}
