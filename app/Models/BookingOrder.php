<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
   
    public function rent():HasOne
    {
        return $this->hasOne(Rent::class,'id','rent_id')->with(['upload']);
    }
}
