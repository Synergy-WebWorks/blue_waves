<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('index/page');
});

Route::get('/user-login', function () {
    return Inertia::render('user-login/page');
});

Route::get('/admin/dashboard', function () {
    return Inertia::render('admin/dashboard/page');
});

Route::get('/admin/activities', function () {
    return Inertia::render('admin/activities/page');
});

Route::get('/admin/reports', function () {
    return Inertia::render('admin/reports/page');
});

Route::get('/admin/reservation', function () {
    return Inertia::render('admin/reservation/page');
});

Route::get('/admin/rooms', function () {
    return Inertia::render('admin/rooms/page');
});

Route::get('/admin/settings', function () {
    return Inertia::render('admin/settings/page');
});

Route::get('/staff/settings', function () {
    return Inertia::render('staff/settings/page');
});

Route::get('/admin/cottage', function () {
    return Inertia::render('admin/cottage/page');
});

Route::get('/admin/accounts', function () {
    return Inertia::render('admin/accounts/page');
});




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
