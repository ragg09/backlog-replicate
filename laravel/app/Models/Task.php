<?php

namespace App\Models;

use App\Http\Requests\StoreTaskRequest;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'type',
        'status',
        'priority',
        'assignee',
        'start_date',
        'due_date',
        'estimated_hours',
        'actual_hours',
    ];

    // public static function create(Request $request)
    // {
    //     return self::create($request->all());
    // }
}
