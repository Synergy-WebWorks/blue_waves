<?php

use App\Http\Controllers\GoogleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\XenditController;
use App\Models\BookingInfo;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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

Route::get('/xendivel/invoice/generate', [XenditController::class, 'get_invoice']);



Route::middleware('redirectBasedOnRole')->get('/', function () {
    return Inertia::render('index/page');
});

Route::get('/book-reservation', function () {
    return Inertia::render('book-reservation/page');
});

Route::get('/online-payment', function () {
    return Inertia::render('online_payment/page');
})->middleware('check.payment');

Route::get('/{type_payment}/success', function () {
    return Inertia::render('online_payment/sections/success');
})->middleware('change.payment');

Route::get('/{type_payment}/failed', function () {
    return Inertia::render('online_payment/sections/failure');
})->middleware('change.payment');

Route::get('/{type_payment}/cancel', function () {
    return Inertia::render('online_payment/sections/cancel');
})->middleware('change.payment');

Route::get('auth/google', [GoogleController::class, 'redirectToGoogle']);
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);

Route::get('/user-login', function () {
    return Inertia::render('user-login/page');
})->name('login');


Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    });

    Route::get('/activities', function () {
        return Inertia::render('admin/activities/page');
    });

    Route::get('/reports', function () {
        return Inertia::render('admin/reports/page');
    });

    Route::get('/reservation', function () {
        return Inertia::render('admin/reservation/page');
    });

    Route::get('/reservation/{id}', function () {
        return Inertia::render('admin/reservation/id/page');
    });
    Route::get('/rooms', function () {
        return Inertia::render('admin/rooms/page');
    });

    Route::get('/settings', function () {
        return Inertia::render('admin/settings/page');
    });

    Route::get('/cottage', function () {
        return Inertia::render('admin/cottage/page');
    });

    Route::get('/accounts', function () {
        return Inertia::render('admin/accounts/page');
    });

    Route::get('/inventory', function () {
        return Inertia::render('admin/inventory/page');
    });

    Route::prefix('inventory')->group(function () {
        Route::get('/', function () {
            return Inertia::render('admin/inventory/page');
        });
        Route::get('/{item_id}', function () {
            return Inertia::render('admin/item_logs/page');
        });
        Route::get('/inventory_received/{item_id}', function () {
            return Inertia::render('admin/received_inventory_stock/page');
        });
    });

    Route::get('/terms', function () {
        return Inertia::render('admin/terms/page');
    });

    Route::get('/landing-page', function () {
        return Inertia::render('admin/landing-page/page');
    });

    Route::get('/booking', function () {
        return Inertia::render('admin/booking/page');
    });

    Route::get('/booking/checkout', function () {
        return Inertia::render('admin/booking/page');
    });

    Route::get('/contact', function () {
        return Inertia::render('admin/contact/page');
    });
});

Route::middleware('auth:sanctum')->prefix('staff')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('staff/dashboard/page');
    });

    Route::get('/activities', function () {
        return Inertia::render('staff/activities/page');
    });

    Route::get('/reports', function () {
        return Inertia::render('staff/reports/page');
    });

    Route::get('/reservation', function () {
        return Inertia::render('staff/reservation/page');
    });

    Route::get('/reservation/{id}', function () {
        return Inertia::render('staff/reservation/id/page');
    });
    Route::get('/rooms', function () {
        return Inertia::render('staff/rooms/page');
    });

    Route::get('/settings', function () {
        return Inertia::render('staff/settings/page');
    });

    Route::get('/cottage', function () {
        return Inertia::render('staff/cottage/page');
    });

    Route::get('/accounts', function () {
        return Inertia::render('staff/accounts/page');
    });

    Route::get('/inventory', function () {
        return Inertia::render('staff/inventory/page');
    });

    Route::prefix('inventory')->group(function () {
        Route::get('/', function () {
            return Inertia::render('staff/inventory/page');
        });
        Route::get('/{item_id}', function () {
            return Inertia::render('staff/item_logs/page');
        });
        Route::get('/inventory_received/{item_id}', function () {
            return Inertia::render('staff/received_inventory_stock/page');
        });
    });

    Route::get('/terms', function () {
        return Inertia::render('staff/terms/page');
    });

    Route::get('/landing-page', function () {
        return Inertia::render('staff/landing-page/page');
    });

    Route::get('/booking', function () {
        return Inertia::render('staff/booking/page');
    });

    Route::get('/booking/checkout', function () {
        return Inertia::render('staff/booking/page');
    });

    Route::get('/contact', function () {
        return Inertia::render('staff/contact/page');
    });
});



Route::middleware('auth:sanctum')->prefix('administrator')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('administrator/dashboard/page');
    });

    Route::get('/activities', function () {
        return Inertia::render('administrator/activities/page');
    });

    Route::get('/reports', function () {
        return Inertia::render('administrator/reports/page');
    });

    Route::get('/reservation', function () {
        return Inertia::render('administrator/reservation/page');
    });

    Route::get('/reservation/{id}', function () {
        return Inertia::render('administrator/reservation/id/page');
    });
    Route::get('/rooms', function () {
        return Inertia::render('administrator/rooms/page');
    });

    Route::get('/settings', function () {
        return Inertia::render('administrator/settings/page');
    });

    Route::get('/cottage', function () {
        return Inertia::render('administrator/cottage/page');
    });

    Route::get('/accounts', function () {
        return Inertia::render('administrator/accounts/page');
    });

    Route::get('/inventory', function () {
        return Inertia::render('administrator/inventory/page');
    });

    Route::prefix('inventory')->group(function () {
        Route::get('/', function () {
            return Inertia::render('administrator/inventory/page');
        });
        Route::get('/{item_id}', function () {
            return Inertia::render('administrator/item_logs/page');
        });
        Route::get('/inventory_received/{item_id}', function () {
            return Inertia::render('administrator/received_inventory_stock/page');
        });
    });

    Route::get('/terms', function () {
        return Inertia::render('administrator/terms/page');
    });

    Route::get('/landing-page', function () {
        return Inertia::render('administrator/landing-page/page');
    });

    Route::get('/booking', function () {
        return Inertia::render('administrator/booking/page');
    });

    Route::get('/booking/checkout', function () {
        return Inertia::render('administrator/booking/page');
    });

    Route::get('/contact', function () {
        return Inertia::render('administrator/contact/page');
    });
});

Route::get('/staff/settings', function () {
    return Inertia::render('staff/settings/page');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
