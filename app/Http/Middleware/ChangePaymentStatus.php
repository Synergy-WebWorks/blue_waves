<?php

namespace App\Http\Middleware;

use App\Models\BookingInfo;
use App\Notifications\InvoiceNotification;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ChangePaymentStatus
{
    public function handle(Request $request, Closure $next): Response
    {
        $referenceId = $request->query('reference_id');
        $status = $request->query('status');
        $result = $this->getPaymentStatus(base64_decode($referenceId), $status);

        if (!$result) {
            return redirect('/');
        }

        return $next($request);
    }

    private function getPaymentStatus($referenceId, $status)
    {
        $bookingInfo = BookingInfo::where('reference_id', $referenceId)->first();

        if ($bookingInfo) {
            if ($status == 'failed') {
                $bookingInfo->update([
                    'status' => $status
                ]);
            }
            if ($bookingInfo->status == 'pending' && $status == 'success') {
                $bookingInfo->update([
                    'status' => 'partial'
                ]);
                $invoiceData = [
                    'id' => $referenceId,
                    'customer_name' => trim("{$bookingInfo->fname} {$bookingInfo->mname} {$bookingInfo->lname}"),
                    'amount' => $bookingInfo->initial,
                    'date' => now()->format('Y-m-d'),
                    'email' => $bookingInfo->email,
                ];

                // Notify user
                $bookingInfo->notify(new InvoiceNotification($invoiceData));
            } else {
                return null;
            }
        }

        return $bookingInfo->status ?? null;
    }
}
