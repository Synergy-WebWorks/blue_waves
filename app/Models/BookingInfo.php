<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference_id',
        'start',
        'end',
        'initial',
        'total',
        'status',
        'submitted_date',
    ];
}
