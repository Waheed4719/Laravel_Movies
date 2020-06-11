<?php

use Illuminate\Database\Seeder;

class filmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(FilmSeeder::class);
        // factory(App\Films::class, 6)->create()->each(function($u) {
        //     $u->issues()->save(factory(App\Films::class)->make());
        //   });

        factory(\App\Films::class, 6)->create();
    }
}
