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
        'email',
        'mobile',
        'fname',
        'mname',
        'lname',
        'suffix',
        'address',
        'initial',
        'total',
        'adults',
        'children',
        'status',
        'submitted_date',
    ];
}
