<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Auth Controller
Route::post('login','AuthController@login');
Route::post('register','AuthController@register');
Route::get('getUser','AuthController@getAuthenticatedUser');
Route::get('logout','AuthController@logout');
Route::get('guard','AuthController@guard');
Route::get('/refreshToken','AuthController@refreshToken');


//Films Controller
Route::get('films','FilmController@index');
Route::post('films','FilmController@create')->middleware("auth:user");;
Route::get('films/{id}','FilmController@getSingleFilm');

//Comments Controller
Route::post('/films/comment', 'CommentController@postComment')->middleware("auth:user");