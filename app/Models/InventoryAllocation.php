<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InventoryAllocation extends Model
{
    use HasFactory;
    protected $fillable = [
        'inventory_id',
        'rent_id',
        'quantity',
        'consumed',
        'status',
        'allocated',
    ];
}
