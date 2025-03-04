<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Activity extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'rate',
        'unit',
        'quantity',
        'intro',
        'description',
    ];

    public function uploads(): HasMany
    {
        return $this->hasMany(Upload::class, 'activity_id', 'id');
    }
}
