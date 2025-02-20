<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingOrder extends Model
{
    use HasFactory;
    protected $fillable = [
        'reference_id',
        'rent_id',
        'activity_id',
        'started_at',
        'end_at',
        'duration',
        'sub_total',
    ];
}
