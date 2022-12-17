<?php

namespace App\Models;

use App\Models\CourseCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;

    protected $table = 'courses';
    protected $primaryKey = 'id';
    public $incrementing = false;

    protected $fillable = [
        'id',
        'title',
        'description',
        'price',
        'category_id'
    ];

    public function category()
    {
        return $this->belongsTo(CourseCategory::class, 'category_id');
    }
}
