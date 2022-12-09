<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'id' => 'ADMIN001',
            'name' => 'Dirga Astya Wisnuwardana',
            'email' => 'admin@hesecourse.com',
            'password' => bcrypt('admincourse1201'),
            'role' => 'admin'
        ]);
    }
}
