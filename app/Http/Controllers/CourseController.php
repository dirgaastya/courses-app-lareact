<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\UserDetail;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
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

    public function courseIndex()
    {
        $courses = Course::with('category')->latest()->paginate(10);
        $categories = CourseCategory::all();
        return Inertia::render('Guest/Course/Index', ['courses' => $courses, 'categories' => $categories]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = CourseCategory::all();
        return Inertia::render('Admin/Course/AddCourse', ['categories' => $categories]);
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
        return Redirect::route('course.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function courseDetail($id)
    {
        if (Auth::check() && Auth::user()->status) {
            $user_id = Auth::id();
            $user_detail_id = UserDetail::where('user_id', $user_id)->get(['id'])->toArray();
            $isBuy = Transaction::where([
                ['course_id', '=', $id],
                ['user_detail_id', '=', $user_detail_id[0]['id']],
            ])->get();
        } else {
            $isBuy = [];
        }
        $course = Course::with('category')->find($id);
        return Inertia::render('Guest/Course/CourseDetail', ['course' => $course, 'isBuy' => $isBuy]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $categories = CourseCategory::all();
        $course = Course::find($id);
        return Inertia::render('Admin/Course/EditCourse', ['categories' => $categories, 'course' => $course]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required',
            'category_id' => 'required'
        ]);

        Course::find($id)->update($request->all());
        return Redirect::route('course.index');
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
