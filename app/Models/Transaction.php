<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $table = 'transactions';
    protected $primaryKey = 'id';
    public $incrementing = false;

    protected $fillable = [
        'id',
        'status',
        'user_detail_id',
        'course_id'
    ];

    public function user()
    {
        return $this->belongsTo(UserDetail::class, 'user_detail_id');
    }

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }
}
