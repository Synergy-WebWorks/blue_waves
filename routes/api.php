<?php

use App\Http\Controllers\PaymentController;
use App\Http\Controllers\XenditPaymentController;
use GlennRaya\Xendivel\Xendivel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/create-payment', [PaymentController::class, 'createPayment'])->name('payment.create');
Route::get('/payment-status', [PaymentController::class, 'paymentStatus'])->name('payment.status');


Route::post('/pay-via-ewallet', function (Request $request) {
    $response = Xendivel::payWithEwallet($request)
        ->getResponse();
    return $response;
});

Route::post('/pay-via-ewallet', function (Request $request) {
    $response = Xendivel::payWithEwallet($request)
        ->getResponse();
    return $response;
});

Route::post('/pay-with-card', function (Request $request) {
    $response = Xendivel::payWithCard($request)
        ->getResponse();
    return $response;
});
