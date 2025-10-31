<?php

namespace App\Models;

use App\Enums\FilterType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filters extends Model
{
    use HasFactory;

    protected $fillable = ['type', 'name'];

    protected $casts = [
        'type' => FilterType::class,
    ];
}
