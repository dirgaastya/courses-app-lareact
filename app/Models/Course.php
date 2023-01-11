<?php

namespace App\Models;

use App\Models\CourseCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Cviebrock\EloquentSluggable\Sluggable;

class Course extends Model
{
    use HasFactory;
    use Sluggable;
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

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
