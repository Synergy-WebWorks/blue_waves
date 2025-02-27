<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class NonConsumableAllocation extends Model
{
    use HasFactory;
    protected $fillable = [
        'item_id',
        'allocation',
        'unallocated',
        'damaged',
    ];

    public function inventory(): HasOne
    {
        return $this->hasOne(Inventory::class, 'id', 'item_id');
    }
}
