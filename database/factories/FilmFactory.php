<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Films;
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

$factory->define(Films::class, function (Faker $faker) {


   

$images = [ 'DontBreath.jpg','Avengers.jpg','FrightNight.jpg','Spiderman.jpg','InsideOut.jpg' ];
$randImage = array_rand($images);
$image = $images[$randImage];

$genres = ['Action','Adventure','Comedy','Romantic'];
$randgenres = array_rand($genres);
$genre = $genres[$randgenres];

    return [
        'name' => $faker->name,
        'description' => $faker->paragraph,
        'release' => 'Released',
        'release_date'=> $faker->date($format = 'Y-m-d', $max = 'now'),
        'rating' => rand(1,5),
        'ticket' => rand(1,10),
        'country' =>  $faker->country,
        'genre' => $genre,
        'photo'=>$image,
        'price' => '15'
    
    ];
});
