<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use App\Http\Controllers\Controller;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::with('category')->latest()->paginate(10);
        $categories = CourseCategory::all();
        return Inertia::render('Admin/Course/Course', ['courses' => $courses, 'categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Course/AddCourse');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $prefix = $request->category_id;
        $config = [
            'table' => 'courses',
            'length' => 8,
            'prefix' => $prefix
        ];

        $id = IdGenerator::generate($config);


        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required',
            'category_id' => 'required'
        ]);

        $courses = new Course();
        $courses->id = $id;
        $courses->title = $request->title;
        $courses->description = $request->description;
        $courses->price = $request->price;
        $courses->category_id = $request->category_id;
        $courses->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required',
            'category_id' => 'required'
        ]);

        Course::find($id)->update($request->all());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Course::find($id)->delete();
    }
}
