<?php

namespace App\Services;

use GuzzleHttp\Client;

class GCashPaymentService
{
    private $apiKey;
    private $endpoint;

    public function __construct()
    {
        $this->apiKey = env('XENDIT_API_KEY');
        $this->endpoint = 'https://api.xendit.co/ewallets/charges';
    }

    public function createPayment($amount, $externalId, $redirectUrl)
    {
        $client = new Client();
        $response = $client->post($this->endpoint, [
            'auth' => [$this->apiKey, ''],
            'json' => [
                'reference_id' => $externalId,
                'currency' => 'PHP',
                'amount' => (int) $amount, // Ensure it's an integer
                'checkout_method' => 'ONE_TIME_PAYMENT',
                'channel_code' => 'GCASH',
                'channel_properties' => [
                    'success_redirect_url' => $redirectUrl,
                    'failure_redirect_url' => $redirectUrl, // Required
                    'mobile_number' => '+639208868123', // (Optional) Required for some cases
                ],
                'metadata' => [
                    'order_id' => $externalId,
                ],
            ],
        ]);

        return json_decode($response->getBody(), true);
    }
}
