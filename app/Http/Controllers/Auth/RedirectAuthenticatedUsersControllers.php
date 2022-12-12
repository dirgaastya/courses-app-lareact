<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RedirectAuthenticatedUsersControllers extends Controller
{
    public function home()
    {
        if (auth()->user()->role == 'admin') {
            return redirect('/admin');
        } elseif (auth()->user()->role == 'user') {
            return redirect('/dashboard');
        } else {
            return auth()->logout();
        }
    }
}
