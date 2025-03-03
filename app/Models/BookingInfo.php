<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;

class BookingInfo extends Model
{
    use HasFactory, Notifiable;

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
        'payment_type',
        'submitted_date',
    ];
    public function booking_orders():HasMany
    {
        return $this->hasMany(BookingOrder::class,'reference_id','reference_id')->with(['rent']);
    }
}
