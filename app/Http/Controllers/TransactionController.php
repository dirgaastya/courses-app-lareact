<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\UserDetail;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $transactions = Transaction::with('user', 'course')->latest()->paginate(10);
        return Inertia::render('Admin/Transaction/Transaction', ['transactions' => $transactions]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'table' => 'transactions',
            'length' => 8,
            'prefix' => 'T' . date('ym')
        ];

        $id = IdGenerator::generate($config);

        $user_id = $request->user_id;
        $user_detail_id = UserDetail::where('user_id', $user_id)->get(['id'])->toArray();
        $transaction = new Transaction();
        $transaction->id = $id;
        $transaction->user_detail_id = $user_detail_id[0]['id'];
        $transaction->course_id = $request->course_id;
        $transaction->save();
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
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
