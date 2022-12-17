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
        Schema::table('transactions', function (Blueprint $table) {
            $table->string('user_detail_id', 8);
            $table->foreign('user_detail_id', 'fk_transaction_user_detail_id')->references('id')->on('user_details')->onUpdate('CASCADE');
            $table->string('course_id', 8);
            $table->foreign('course_id', 'fk_transaction_course_id')->references('id')->on('courses')->onUpdate('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('transactions', function (Blueprint $table) {
            $table->dropForeign('fk_transaction_user_detail_id');
            $table->dropColumn('user_detail_id');
            $table->dropForeign('fk_transaction_course_id');
            $table->dropColumn('course_id');
        });
    }
};
