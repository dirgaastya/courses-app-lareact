<?php

namespace Database\Seeders;

use App\Models\Period;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PeriodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Period::create([
            'id' => 'FY01',
            'name' => 'First Year',
            'time_start' => '2022-01-01',
            'time_end' => '2022-04-30',
            'cost' => 2500000,
        ]);

        Period::create([
            'id' => 'MY01',
            'name' => 'Mid Year',
            'time_start' => '2022-05-01',
            'time_end' => '2022-08-30',
            'cost' => 3000000,
        ]);

        Period::create([
            'id' => 'EY01',
            'name' => 'End Year',
            'time_start' => '2022-09-01',
            'time_end' => '2022-12-30',
            'cost' => 2000000,
        ]);
    }
}
