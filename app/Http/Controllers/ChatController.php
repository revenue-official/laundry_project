<?php

namespace App\Http\Controllers;

use App\Events\ChatEvent;
use App\Models\MessageModel;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller {

	private function mergeMessagesWithUsers() {
		$messages = MessageModel::all();
		$users = User::all();

		$mergedArray = $messages->map(function ($message) use ($users) {
			$user = $users->firstWhere('id', $message->user_id);

			if ($user) {
				return [
					'id' => $message->id,
					'user_id' => $user->id,
					'name' => $user->name,
					'message' => $message->message,
					'status' => $user->status,
					'created_at' => $message->created_at,
				];
			}

			return null;
		})->filter();

		return $mergedArray;
	}

	public function index(Request $request) {
		$tokenValue = $request->session()->get('lx_token');

		$user = null;

		if ($tokenValue) {
			$user = User::where('token', $tokenValue)->first();
		}

		$dataUser = ([
			'name' => $user?->name,
			'token' => $user?->token,
		]);

		$messages = $this->mergeMessagesWithUsers();
		return Inertia::render(
			'Chat',
			[
				'title' => 'Chat',
				'messages' => $messages,
				'dataUser' => $dataUser,
			]
		);
	}

	public function store(Request $request) {
		$message = $request->all();

		// event(new ChatEvent($message));
		ChatEvent::dispatch($message);

		return response()->json($message);
	}

	public function layout() {
		return Inertia::render(
			'TestChat'
		);
	}

}
