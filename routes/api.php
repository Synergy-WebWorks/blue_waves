<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\BookingInfoController;
use App\Http\Controllers\BookingOrderController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InventoryAllocationController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\InventoryStockController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\RentController;
use App\Http\Controllers\ResortController;
use App\Http\Controllers\TermController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\XenditController;
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


// Route::post('/create-payment', [PaymentController::class, 'createPayment'])->name('payment.create');
// Route::get('/payment-status', [PaymentController::class, 'paymentStatus'])->name('payment.status');


Route::resource('activity', ActivityController::class);
Route::resource('dashboard', DashboardController::class);
Route::resource('booking_info', BookingInfoController::class);
Route::get('/get_calendar', [BookingInfoController::class, 'get_calendar']);
Route::post('/add_order', [BookingInfoController::class, 'add_order']);
Route::post('/checkout_data', [BookingInfoController::class, 'checkout_data']);

Route::resource('booking_order', BookingOrderController::class);
Route::resource('inventory_allocations', InventoryAllocationController::class);
Route::resource('inventory', InventoryController::class);
Route::put('/return_item/{id}', [InventoryController::class, 'return_item']);
Route::resource('inventory_stocks', InventoryStockController::class);
Route::resource('landing_page', LandingPageController::class);
Route::resource('rent', RentController::class);
Route::post('/update_rent', [RentController::class, 'update_rent']);
Route::resource('resort', ResortController::class);
Route::resource('term', TermController::class);
Route::resource('upload', UploadController::class);


Route::post('pay-via-ewallet', [XenditController::class, 'pay_via_ewallet']);
Route::post('pay-with-card', [XenditController::class, 'pay_via_card']);


// Route::post('/pay-via-ewallet', function (Request $request) {
//     $response = Xendivel::payWithEwallet($request)
//         ->getResponse();
//     return $response;
// });

// Route::post('/pay-with-card', function (Request $request) {
//     $response = Xendivel::payWithCard($request)
//         ->getResponse();
//     return $response;
// });


// use GlennRaya\Xendivel\Invoice;

// Route::get('/xendivel/invoice/generate', function () {
//     $invoice_data = [
//         'invoice_number' => '831000',
//         'card_type' => 'VISA',
//         'masked_card_number' => '4000000000001091',
//         'merchant' => [
//             'name' => 'Xendivel LLC',
//             'address' => '152 Maple Avenue Greenfield, New Liberty, Arcadia USA 54331',
//             'phone' => '+63 971-444-1234',
//             'email' => 'xendivel@example.com',
//         ],
//         'customer' => [
//             'name' => 'Victoria Marini',
//             'address' => 'Alex Johnson, 4457 Pine Circle, Rivertown, Westhaven, 98765, Silverland',
//             'email' => 'victoria@example.com',
//             'phone' => '+63 909-098-654',
//         ],
//         'items' => [
//             ['item' => 'iPhone 15 Pro Max', 'price' => 1099, 'quantity' => 5],
//             ['item' => 'MacBook Pro 16" M3 Max', 'price' => 2499, 'quantity' => 3],
//             ['item' => 'Apple Pro Display XDR', 'price' => 5999, 'quantity' => 2],
//             ['item' => 'Pro Stand', 'price' => 999, 'quantity' => 2],
//         ],
//         'tax_rate' => .12,
//         'tax_id' => '123-456-789',
//         'footer_note' => 'Thank you for your recent purchase with us! We are thrilled to have the opportunity to serve you and hope that your new purchase brings you great satisfaction.',
//     ];

//     return Invoice::make($invoice_data)
//         ->save();
    
// });
