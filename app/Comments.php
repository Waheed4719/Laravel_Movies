<?php


namespace App;
use Illuminate\Database\Eloquent\Model;


class Comments extends Model{

    protected $fillable = [
        'user_id','film_id','comment'
    ]; 


    public function films(){
        return $this->belongsTo('App\Films','film_id');
    }

    public function user(){
        return $this->belongsTo('App\User','user_id');
    }

}