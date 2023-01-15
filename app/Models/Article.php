<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = ['category_id' , 'user_id' , 'title' , 'content'];
    protected $hidden = [
        'category_id',
        'user_id',
    ];
    public function category(){
       return $this->belongsTo(Category::class);
    }

    public function author(){
        return $this->belongsTo(User::class,'user_id', 'id');
    }

}
