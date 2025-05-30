<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Rent extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'rate',
        'min_capacity',
        'max_capacity',
        'description',
        'type',
        'status'
    ];

    public function uploads(): HasMany
    {
        return $this->hasMany(Upload::class, 'rent_id', 'id');
    }
    public function upload(): HasOne
    {
        return $this->hasOne(Upload::class, 'rent_id', 'id');
    }
}
