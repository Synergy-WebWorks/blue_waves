<?php

namespace App\Http\Controllers;

use App\Models\BookingInfo;
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

        // $invoice_data = $booking_info->toArray() + [  // Preserve existing values
        //     'invoice_number' => $booking_info->reference_id,
        //     'merchant' => [
        //         'name' => 'Blue Waves',
        //         'address' => 'Sipaway Island San Carlos City Negros Occidental',
        //         'phone' => '+63 971-444-1234',
        //         'email' => 'blue_waves@gmail.com',
        //     ],
        //     'customer' => [
        //         'name' => trim("{$booking_info->fname} {$booking_info->mname} {$booking_info->lname}"),
        //         'address' => $booking_info->address,
        //         'email' =>  $booking_info->email,
        //         'phone' =>  $booking_info->mobile,
        //     ],
        //     'items' => [
        //         ['item' => 'iPhone 15 Pro Max', 'price' => 1099, 'quantity' => 5],
        //         ['item' => 'MacBook Pro 16" M3 Max', 'price' => 2499, 'quantity' => 3],
        //         ['item' => 'Apple Pro Display XDR', 'price' => 5999, 'quantity' => 2],
        //         ['item' => 'Pro Stand', 'price' => 999, 'quantity' => 2],
        //     ],
        //     'tax_rate' => .12,
        //     'tax_id' => '123-456-789',
        //     'footer_note' => 'Thank you for your purchase! Stay powered up!'
        // ];
        $invoice_data = [
            'invoice_number' => 1000023,
            'card_type' => 'VISA',
            'masked_card_number' => '400000XXXXXX0002',
            'merchant' => [
                'name' => 'Stark Industries',
                'address' => '152 Maple Avenue Greenfield, New Liberty, Arcadia USA 54331',
                'phone' => '+63 971-444-1234',
                'email' => 'xendivel@example.com',
            ],
            'customer' => [
                'name' => 'Mr. Glenn Raya',
                'address' => 'Alex Johnson, 4457 Pine Circle, Rivertown, Westhaven, 98765, Silverland',
                'email' => 'silveriansako@gmail.com',
                'phone' => '+63 909-098-654',
            ],
            'items' => [
                ['item' => 'MacBook Pro 16" M3 Max', 'price' => $request->amount, 'quantity' => 1],
            ],
            'tax_rate' => .12,
            'tax_id' => '123-456-789',
            'footer_note' => 'Thank you for your recent purchase with us! We are thrilled to have the opportunity to serve you and hope that your new purchase brings you great satisfaction.',
        ];


        $response = Xendivel::payWithCard($request)
            ->emailInvoiceTo($booking_info->email, $invoice_data)
            ->subject('Thank you for booking reservation.')
            ->send()
            ->getResponse();

        return $response;
    }
}
