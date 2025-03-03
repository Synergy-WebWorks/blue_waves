<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class InvoiceNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $invoiceData;

    /**
     * Create a new notification instance.
     */
    public function __construct($invoiceData)
    {
        $this->invoiceData = $invoiceData;
    }

    /**
     * Get the notification's delivery channels.
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable)
    {
        // Generate PDF invoice
        // $pdf = Pdf::loadView('emails.invoice-pdf', ['invoiceData' => $this->invoiceData]);
        // $pdfPath = storage_path('app/invoices/invoice-' . $this->invoiceData['id'] . '.pdf');
        // Storage::put('invoices/invoice-' . $this->invoiceData['id'] . '.pdf', $pdf->output());

        return (new MailMessage)
            ->subject('Reservation Invoice')
            ->greeting('Hello ' . $this->invoiceData['customer_name'] . ',')
            ->line('Thank you for your payment!')
            ->line('Invoice ID: ' . $this->invoiceData['id'])
            ->line('Total: ₱' . $this->invoiceData['amount'])
            ->line('Please find your invoice attached.')
            // ->attach($pdfPath, [
            //     'as' => 'invoice.pdf',
            //     'mime' => 'application/pdf',
            // ])
            ->action('View Invoice', url('/xendivel/invoice/generate?reference_id=' . $this->invoiceData['id']));
    }
}
