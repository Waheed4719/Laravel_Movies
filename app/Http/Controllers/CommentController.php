<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Comments;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;




class CommentController extends Controller {

    public function getComments(Request $request){
            $comments = Comments::where('film_id',$request->film_id)->get();

            return response()->json(['comments'=>$comments],200);
    }


    public function postComment(Request $request){
        $user = auth('user')->user()->id;
        $savedComment = Comments::create([
            'user_id' => $user,
            'film_id' => $request->film_id,
            'comment' => $request->comment
        ]);

        return response()->json(['obj'=> $savedComment],200);

    }

    


}