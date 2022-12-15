<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Period;
use Illuminate\Http\Request;

class PeriodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('/User/Period');
    }

    public function adminIndex()
    {
        $periods = Period::latest()->paginate(10);
        return Inertia::render('Admin/Index', ['periods' => $periods]);
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
    public function edit(Period $post)
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
    public function destroy($id)
    {
        Period::find($id)->delete();
    }
}
