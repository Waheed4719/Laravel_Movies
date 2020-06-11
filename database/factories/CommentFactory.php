<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Comments;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Comments::class, function (Faker $faker) {


   

$comments = [ 'Nice film','Had a great time','Waste of my money','Deserves a 1/5 rating','Awesome!' ];
$randComment = array_rand($comments);
$comment = $comments[$randComment];


    return [
        'comment' => $comment,
        'user_id' => 1
    ];
});
