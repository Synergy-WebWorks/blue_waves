<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LandingPage extends Model
{
    use HasFactory;
    protected $fillable = [
        'hero_title',
        'hero_content',
        'room_title',
        'room_content',
        'cottage_title',
        'cottage_content',
        'activity_title',
        'activity_content',
        'contact_title',
        'contact_content',
    ];
}
