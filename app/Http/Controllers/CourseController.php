<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('/User/Course');
    }

    public function adminIndex()
    {
        $courses = Course::latest()->paginate(10);
        return Inertia::render('Admin/Index', ['courses' => $courses]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Index');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $post)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'mentor_name' => 'required',
            'period_id' => 'required'
        ]);

        Course::find($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Course::find($id)->delete();
    }
}
