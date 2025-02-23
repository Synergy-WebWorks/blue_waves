<?php

namespace App\Http\Middleware;

use App\Models\BookingInfo;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ChangePaymentStatus
{
    public function handle(Request $request, Closure $next): Response
    {
        $referenceId = $request->query('reference_id');

        $result = $this->getPaymentStatus(base64_decode($referenceId));

        if (!$result) {
            return redirect('/');
        }

        return $next($request);
    }

    private function getPaymentStatus($referenceId)
    {
        $bookingInfo = BookingInfo::where('reference_id', $referenceId)->first();

        if ($bookingInfo) {
            if ($bookingInfo->status == 'pending') {
                $bookingInfo->update([
                    'status' => 'partial'
                ]);
            } else {
                return null;
            }
        }
        return $bookingInfo->status ?? null;
    }
}
