<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class BookingNotification extends Notification
{
    use Queueable;
    protected $booking;
    /**
     * Create a new notification instance.
     */
    public function __construct($booking)
    {
        $this->booking = $booking;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {

        return (new MailMessage)
            ->subject('Payment Confirmation for Your Reservation')
            ->greeting('Dear ' . ($this->booking->fname ?? 'Valued Customer') . ',')
            ->line('Thank you for your reservation with Blue Waves'  . '.')
            ->line('**Reservation ID:** ' . $this->booking->reference_id)
            ->line('**Down Payment** ' . number_format($this->booking->initial, 2))
            ->line('**Reservation Date & Time:** ' . $this->booking->start . ' to ' . $this->booking->end)
            ->action('GO TO PAYMENT METHOD', url('https://bluewaves-sipaway.com/online-payment?reference_id='. $this->booking->reference_id))
            ->line('We look forward to serving you!')
            ->salutation('Best regards, ' . "\n" . config('app.name'));
    }
}
