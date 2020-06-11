
<?php

use Illuminate\Database\Seeder;

class FilmSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\User::class, 6)->create();
        factory(\App\Films::class, 6)->create()->each(function ($film) {
            $film->comments()->save(factory(App\Comments::class)->make());
        });

    }
}
