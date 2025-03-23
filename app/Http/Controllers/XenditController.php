<?php

namespace App\Http\Controllers;

use App\Models\BookingInfo;
use App\Notifications\BookingNotification;
use GlennRaya\Xendivel\Xendivel;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class XenditController extends Controller
{

    public function get_invoice(Request $request)
    {
        $booking_info = BookingInfo::where('reference_id', $request->reference_id)->with(['booking_orders'])->first();
        if (!$booking_info) {
            return response()->json(['error' => 'Booking not found'], 404);
        }

        $data = [
            'invoice_data' => [
                'invoice_number' => $request->reference_id,
                'card_type' => 'VISA',
                'masked_card_number' => '400000XXXXXX0002',
                'merchant' => [
                    'name' => 'Blue Waves',
                    'address' => 'BRGY. ERMITA, SIPAWAY ISLAND, SAN CARLOS CITY, NEGROS OCCIDENTAL 6127.',
                    'phone' => '09561771701',
                    'email' => 'bluewaves@gmail.com',
                ],
                'customer' => [
                    'name' => $booking_info->fname . ' ' . $booking_info->mname . ' ' . $booking_info->lname,
                    'address' => $booking_info->address,
                    'email' => $booking_info->email,
                    'phone' => $booking_info->mobile,
                ],
                'items' => $booking_info->booking_orders->map(function ($order) {
                    return [
                        'item' => $order->rent['name'], // Adjust field names accordingly
                        'price' => $order->rent['rate'], // Adjust field names accordingly
                        // 'unit_price' => $order->rent['rate'],
                        // 'sub_total'=>100,
                        'quantity' => $order->duration,
                    ];
                })->toArray(),

                'downpayment' => $booking_info->initial,
                'adults' => $booking_info->adults,
                'children' => $booking_info->children,
                'tax_rate' => 0,
                'tax_id' => '123-456-789',
                'footer_note' => 'Thank you for your recent purchase with us! We are thrilled to have the opportunity to serve you and hope that your new purchase brings you great satisfaction.',
            ],
        ];

        $pdf = Pdf::loadView('xendivel::invoice', $data)->setPaper('a4');
        return $pdf->stream('invoice.pdf');
    }


    public function pay_via_ewallet(Request $request)
    {
        $response = Xendivel::payWithEwallet($request)
            ->getResponse();
        return $response;
    }

    public function pay_via_card(Request $request)
    {
        $booking_info = BookingInfo::where('reference_id', $request->reference_id)->first();

        if (!$booking_info) {
            return response()->json(['error' => 'Booking not found'], 404);
        }

        $response = Xendivel::payWithCard($request)
            ->getResponse();
        return $response;
    }
}
