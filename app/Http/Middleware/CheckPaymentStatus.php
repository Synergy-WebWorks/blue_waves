<?php

namespace App\Http\Middleware;

use App\Models\BookingInfo;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckPaymentStatus
{
    public function handle(Request $request, Closure $next): Response
    {
        $referenceId = $request->query('reference_id');

        // Simulate fetching payment status from database or API
        $paymentStatus = $this->getPaymentStatus($referenceId);

        if ($paymentStatus !== 'pending') {
            return redirect('/');
        }

        return $next($request);
    }

    private function getPaymentStatus($referenceId)
    {
        $bookingInfo =BookingInfo::where('reference_id',$referenceId)->first();
        return $bookingInfo->status;
    }
}
