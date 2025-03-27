<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Additional extends Model
{
    use HasFactory;
    protected $fillable = [
        'reference_id',
        'activity_id',
        'rate',
        'quantity',
        'total',
    ];


    public function activity(): HasOne
    {
        return $this->hasOne(Activity::class, 'id', 'activity_id');
    }
}
