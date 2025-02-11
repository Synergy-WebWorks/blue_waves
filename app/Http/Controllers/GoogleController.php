<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->user();
        $user = User::where('email', $googleUser->email)->first();
        if ($user) {
            Auth::login($user);
            if ($user->user_type == 1) {
                return redirect(RouteServiceProvider::HOME);
            } else if ($user->user_type == 2) {
                return redirect(RouteServiceProvider::CUSTOMER);
            }
        } else {
             return redirect(RouteServiceProvider::LOGININVALID);
        }
    }
}
