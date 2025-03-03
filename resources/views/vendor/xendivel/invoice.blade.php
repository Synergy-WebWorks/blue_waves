<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xendivel Invoice Template</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,900;0,9..40,1000;1,9..40,800&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ public_path('css/tailwind.css') }}">
    <link rel="stylesheet" href="/css/tailwind.css">
    {{-- @vite('resources/css/invoice.css') --}}


</head>

<body class="antialiased flex flex-col h-screen text-[10px] font-sans text-gray-700 tracking-tight">
    {{-- Header: This contains the company logo, name,
         address and other contact information. --}}
    <div class="w-full bg-gradient-to-t from-slate-200 via-white">
        <div class="container flex flex-row justify-between w-full mx-auto p-8">
            <table class="w-full bg-gradient-to-t from-slate-200 via-white border-collapse">
                <tr>
                    <!-- Merchant Info -->
                    <td class="w-1/2 align-top p-4">
                        <table class="w-full">
                            <tr>
                                <td class="pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-boxes">
                                        <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                                        <path d="m7 16.5-4.74-2.85" />
                                        <path d="m7 16.5 5-3" />
                                        <path d="M7 16.5v5.17" />
                                        <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                                        <path d="m17 16.5-5-3" />
                                        <path d="m17 16.5 4.74-2.85" />
                                        <path d="M17 16.5v5.17" />
                                        <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                                        <path d="M12 8 7.26 5.15" />
                                        <path d="m12 8 4.74-2.85" />
                                        <path d="M12 13.5V8" />
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td class="font-light">Invoice #: {{ $invoice_data['invoice_number'] }}</td>
                            </tr>
                            <tr>
                                <td class="font-bold text-gray-400">Merchant</td>
                            </tr>
                            <tr>
                                <td class="text-base">{{ $invoice_data['merchant']['name'] }}</td>
                            </tr>
                            <tr>
                                <td>{{ $invoice_data['merchant']['address'] }}</td>
                            </tr>
                            <tr>
                                <td>Phone: {{ $invoice_data['merchant']['phone'] }}</td>
                            </tr>
                            <tr>
                                <td>Email: {{ $invoice_data['merchant']['email'] }}</td>
                            </tr>
                        </table>
                    </td>

                    <!-- Customer Info -->
                    <td class="w-1/2 align-top p-4 text-right">
                        <table class="w-full">
                            <tr>
                                <td class="font-light text-right">Date: {{ now()->format('M. d, Y \a\t g:ia') }}</td>
                            </tr>
                            <tr>
                                <td class="font-bold text-gray-400 text-right">Customer</td>
                            </tr>
                            <tr>
                                <td class="text-base text-right">{{ $invoice_data['customer']['name'] }}</td>
                            </tr>
                            <tr>
                                <td class="text-right">{{ $invoice_data['customer']['address'] }}</td>
                            </tr>
                            <tr>
                                <td class="text-right">Phone: {{ $invoice_data['customer']['phone'] }}</td>
                            </tr>
                            <tr>
                                <td class="text-right">Email: {{ $invoice_data['customer']['email'] }}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

        </div>
    </div>

    {{-- Invoice Details: This is where you'll typically place the details
         about the transaction such as the items, quantity, amount, etc.  --}}
    <div class="container mx-auto p-8">
        <div style="font-size: 24px; font-weight: bold;">
            Entrance Fee
        </div>

        <table class="w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-100">
                    <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Qty</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Unit Price</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Subtotal</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr class="bg-gray-100">
                    <td class="border border-gray-300 px-4 py-2">Adults</td>
                    <td class="border border-gray-300 px-4 py-2">{{$invoice_data['adults'] / 50}}</td>
                     <td class="border border-gray-300 px-4 py-2">₱ 50</td>
                     <td class="border border-gray-300 px-4 py-2">
                        ₱ {{$invoice_data['adults']}}
                    </td>
                </tr>
                <tr class="bg-gray-100">
                    <td class="border border-gray-300 px-4 py-2">Children</td>
                    <td class="border border-gray-300 px-4 py-2">{{$invoice_data['children'] / 20}}</td>
                    <td class="border border-gray-300 px-4 py-2">₱ 20</td>
                    <td class="border border-gray-300 px-4 py-2">
                        ₱ {{$invoice_data['children']}}
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="font-size: 24px; font-weight: bold;">
            Rent Room/Cottage
        </div>
        <table class="w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-100">
                    <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Qty</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Unit Price</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Subtotal</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                @php
                $total_price = 0;
                @endphp
                @foreach ($invoice_data['items'] as $item)
                @php
                $total_price += $item['price'] * $item['quantity'];
                @endphp
                <tr class="bg-gray-100">
                    <td class="border border-gray-300 px-4 py-2">{{ $item['item']}}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ $item['quantity'] }}day(s)</td>
                    <td class="border border-gray-300 px-4 py-2">₱ {{ number_format($item['price'], 2) }}</td>
                    <td class="border border-gray-300 px-4 py-2">
                        ${{ number_format($item['price'] * $item['quantity'], 2) }}
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <div class="container mx-auto">
        <table class="w-full border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-100">
                    <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th class="border border-gray-300 px-4 py-2 text-right">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Cottages/Rooms</td>
                    <td class="border border-gray-300 px-4 py-2 text-right">₱ {{ number_format($total_price, 2) }}</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Entrance Fee</td>
                    <td class="border border-gray-300 px-4 py-2 text-right">₱ {{ ($invoice_data['adults'] ?? 0) + ($invoice_data['children'] ?? 0) }}</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Downpayment</td>
                    <td class="border border-gray-300 px-4 py-2 text-right">₱ {{ number_format($invoice_data['downpayment'], 2) }}</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Tax Rate</td>
                    <td class="border border-gray-300 px-4 py-2 text-right">0%</td>
                </tr>
                <tr>
                    @php
                    $tax_amount = $total_price * $invoice_data['tax_rate'];
                    @endphp
                    <td class="border border-gray-300 px-4 py-2">Tax Amount</td>
                    <td class="border border-gray-300 px-4 py-2 text-right">₱ {{ number_format($tax_amount, 2) }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="bg-black text-white font-bold">
                    <td class="border border-gray-300 px-4 py-2 uppercase">Total Balance</td>
                    <td class="border border-gray-300 px-4 py-2 text-right">₱ {{ number_format(($total_price + $tax_amount) + $invoice_data['adults'] + $invoice_data['children'] - $invoice_data['downpayment'], 2) }}</td>
                </tr>
            </tfoot>
        </table>

        <div class="mt-4 flex items-center">
            {{-- Payment Method Icons --}}
            @if ($invoice_data['card_type'] === 'VISA')
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="w-10" fill="currentColor">
                <g data-name="Visa credit card">
                    <path fill="#273991" d="M12.77 32.28l-1.69-8.17a2 2 0 0 0-2.2-1.5H1.06L1 23c6.08 1.46 10.1 5 11.77 9.28Z"></path>
                </g>
            </svg>
            @endif

            @if ($invoice_data['card_type'] === 'MASTERCARD')
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10" fill="currentColor">
                <path fill="#FF5F00" d="M15.245 17.831h-6.49V6.168h6.49v11.663z"></path>
                <path fill="#EB001B" d="M9.167 12A7.404 7.404 0 0 1 12 6.169 7.417 7.417 0 0 0 0 12a7.417 7.417 0 0 0 11.999 5.831A7.406 7.406 0 0 1 9.167 12z"></path>
                <path fill="#F79E1B" d="M24 12a7.417 7.417 0 0 1-12 5.831c1.725-1.358 2.833-3.465 2.833-5.831S13.725 7.527 12 6.169A7.417 7.417 0 0 1 24 12z"></path>
            </svg>
            @endif
        </div>
    </div>


    {{-- Footer, thank you note. --}}
    @if (isset($invoice_data['footer_note']) && $invoice_data['footer_note'] !== '')
    <div class="container flex justify-between mx-auto mt-auto p-8">
        <div class="flex flex-col py-4 w-1/2">
            <span class="font-bold">Dear customer,</span>
            <p>{{ $invoice_data['footer_note']}}</p>
        </div>

        <!-- <div class="flex flex-col py-4 mt-auto">
            <span class="font-bold">Tax ID/VAT Number: {{ $invoice_data['tax_id'] }}</span>
        </div> -->
    </div>
    @endif

</body>

</html>