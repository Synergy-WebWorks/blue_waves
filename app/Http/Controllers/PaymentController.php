<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\GCashPaymentService;

class PaymentController extends Controller
{
    protected $gcashService;

    public function __construct(GCashPaymentService $gcashService)
    {
        $this->gcashService = $gcashService;
    }

    public function createPayment(Request $request)
    {
        $amount = $request->input('amount');
        $externalId = uniqid('order_');
        $redirectUrl = route('payment.status');

        $payment = $this->gcashService->createPayment($amount, $externalId, $redirectUrl);

        return redirect($payment['actions']['desktop_web_checkout_url']);
    }

    public function paymentStatus(Request $request)
    {
        $status = $request->input('status');
        // Handle payment status (e.g., success, failed)
    }
}
