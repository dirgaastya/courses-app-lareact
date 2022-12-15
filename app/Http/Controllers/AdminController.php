<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\Period;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::latest()->paginate(10);
        $periods = Period::latest()->paginate(10);
        return Inertia::render('Admin/Index', ['courses' => $courses, 'periods' => $periods]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeCourse(Request $request)
    {
        $config = [
            'table' => 'courses',
            'length' => 8,
            'prefix' => date('ym')
        ];

        $id = IdGenerator::generate($config);


        $request->validate([
            'name' => 'required',
            'mentor_name' => 'required',
            'period_id' => 'required'
        ]);

        $courses = new Course();
        $courses->id = $id;
        $courses->name = $request->name;
        $courses->mentor_name = $request->mentor_name;
        $courses->period_id = $request->period_id;
        $courses->save();
    }

    public function storePeriod(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'time_start' => 'required',
            'time_end' => 'required',
            'cost' => 'required'
        ]);

        $periods = new Period();
        $periods->id = $request->id;
        $periods->name = $request->name;
        $periods->time_start = $request->time_start;
        $periods->time_end = $request->time_end;
        $periods->cost = $request->cost;
        $periods->save();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateCourse(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'mentor_name' => 'required',
            'period_id' => 'required'
        ]);

        Course::find($id)->update($request->all());
    }

    public function updatePeriod(Request $request, $id)
    {
        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'time_start' => 'required',
            'time_end' => 'required',
            'cost' => 'required'
        ]);

        Period::find($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroyCourse($id)
    {
        Course::find($id)->delete();
    }

    public function destroyPeriod($id)
    {
        Period::find($id)->delete();
    }
}
