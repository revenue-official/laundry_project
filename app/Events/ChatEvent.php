<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ChatEvent implements ShouldBroadcast {
	use Dispatchable, SerializesModels;

	public $message;

	/**
	 * Create a new event instance.
	 *
	 * @param mixed $message
	 */
	public function __construct($message) {
		$this->message = $message;
	}

	/**
	 * Get the channels the event should broadcast on.
	 *
	 * @return Channel|array
	 */
	public function broadcastOn() {
		// return new Channel('chat-channel');
		return new PrivateChannel('chat-channel');

	}

	/**
	 * Get the message to broadcast.
	 *
	 * @return array
	 */
	public function broadcastWith() {
		return $this->message;
	}
}