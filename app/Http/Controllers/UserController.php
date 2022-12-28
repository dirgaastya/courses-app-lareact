<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class UserController extends Controller
{
    public function dashboardIndex()
    {
        //
    }

    public function registrationUserDetailIndex()
    {
        return Inertia::render('User/UserDetail/RegistrationDetailUser');
    }

    public function storeUserDetail(Request $request)
    {
        $config = [
            'table' => 'user_details',
            'length' => 8,
            'prefix' => 'UD' . date('ym')
        ];

        $id = IdGenerator::generate($config);

        $request->validate([
            'name' => 'required',
            'birthdate' => 'required',
            'birthplace' => 'required',
            'city' => 'required',
            'education' => 'required',
            'job'  => 'required',
            'phone_number' => 'required'
        ]);
        $userID = Auth::id();
        $userDetail = new UserDetail();
        $userDetail->id = $id;
        $userDetail->name = $request->name;
        $userDetail->birthdate = $request->birthdate;
        $userDetail->birthplace = $request->birthplace;
        $userDetail->city = $request->city;
        $userDetail->education = $request->education;
        $userDetail->job = $request->job;
        $userDetail->phone_number = $request->phone_number;
        $userDetail->user_id = $userID;
        $userDetail->save();

        $userStatus = User::find($userID);
        $userStatus->status = true;
        $userStatus->save();
        return Redirect::route('dashboard');
    }
}
