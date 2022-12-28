<?php

namespace Database\Seeders;

use App\Models\CourseCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CourseCategory::create([
            'id' => 'Lv',
            'name' => 'Laravel',
            'description' => 'lorem ipsum dolor asdklaskdlaksdw asdjkalksdjlaksjdklasj aw jawkljaklwj aklj kljasxkljakl s'
        ]);
    }
}
