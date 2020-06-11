<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('films', function (Blueprint $table) {
            $table->id();
            $table->string("name")->unique();
            $table->longText("description");
            $table->string("release")->nullable();
            $table->date("release_date")->nullable();
            $table->float("rating")->nullable();
            $table->integer("ticket")->default('0');
            $table->float("price")->nullable();
            $table->string("country");
            $table->string("genre");
            $table->string("photo")->nullable();;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('films');
    }
}
