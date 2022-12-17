<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CourseCategory;
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
        $courses = Course::with('category')->paginate(10);


        $categories = CourseCategory::latest()->paginate(10);
        return Inertia::render('Admin/Index', ['courses' => $courses, 'categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeCourse(Request $request)
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

    public function storeCategory(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'description' => 'required'
        ]);

        $category = new CourseCategory();
        $category->id = $request->id;
        $category->name = $request->name;
        $category->description = $request->description;
        $category->save();
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
            'title' => 'required',
            'description' => 'required',
            'price' => 'required',
            'category_id' => 'required'
        ]);

        Course::find($id)->update($request->all());
    }

    public function updateCategory(Request $request, $id)
    {
        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'description' => 'required'
        ]);

        CourseCategory::find($id)->update($request->all());
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

    public function destroyCategory($id)
    {
        CourseCategory::find($id)->delete();
    }
}
