<?php


namespace App;
use Illuminate\Database\Eloquent\Model;


class Films extends Model{

    protected $fillable = [
        'name','release','description','release_date','ticket','rating','price','photo','country','genre'
    ]; 
    public function comments(){
        return $this->hasMany('App\Comments','film_id');
    }


}