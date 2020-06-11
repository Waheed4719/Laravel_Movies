<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Films;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;




class FilmController extends Controller {

    public function index(){
        return Films::all();        
    }

    public function create(Request $request){
        

        $request->validate([
            'photo' => 'required|file|mimes:jpeg,png,jpg,gif,svg,mp4,pdf|max:5049506',
        ]);
  
        $imageName = time().'.'.$request->photo->getClientOriginalName();  
   
        $request->photo->move(public_path('images'), $imageName);
   
        $savedMovie = Films::create([
            'name' => $request->name,
            'description' => $request->description,
            'release'=> $request->release,
            'release_date'=> $request->release_date,
            'rating'=>$request->rating,
            'ticket'=>$request->ticket,
            'price'=>$request->price,
            'country'=>$request->country,
            'genre'=>$request->genre,
            'photo'=>$imageName
            
        ]);

        return response()->json(['obj'=>$savedMovie],200); 

    }

    public function getSingleFilm($id){
        $film = Films::where('id',$id)->FirstOrFail();
        $comments = $film->comments()->with('user')->get();
        return response()->json(['film'=>$film,'comments'=>$comments],200); 

    }


}