<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('forms', function (Blueprint $table) {
            $table->string('user_id', 8);
            $table->foreign('user_id', 'fk_forms_user_id')->references('id')->on('users')->onUpdate('CASCADE');
            $table->string('period_id', 4);
            $table->foreign('period_id', 'fk_forms_period_id')->references('id')->on('periods')->onUpdate('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('forms', function (Blueprint $table) {
            $table->dropForeign('fk_forms_user_id');
            $table->dropColumn('user_id');
            $table->dropForeign('fk_forms_period_id');
            $table->dropColumn('period_id');
        });
    }
};
