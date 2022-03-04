<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function login()
    {
        return 'Login';
    }


    public function logout()
    {
        return 'Logout';
    }

    public function refresh()
    {
        return 'Refresh';
    }

    public function me()
    {
        return 'Me';
    }

    public function register()
    {
        return  'Register';
    }
}
