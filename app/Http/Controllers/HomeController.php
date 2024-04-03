<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\inertia;

class HomeController extends Controller {
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

		return Inertia::render(
			'Home',
			[
				'title' => 'Home',
				'dataUser' => $dataUser,
			]
		);
	}

	public function profile($token, Request $request) {
		$decodeToken = base64_decode($token);
		$sessionToken = $request->session()->get('lx_token');
		$user = null;

		if ($decodeToken == $sessionToken) {
			$user = User::where('token', $sessionToken)->first();
			if ($user) {
				$filterData = ([
					'uuid' => $user->uuid,
					'name' => $user->name,
					'email' => $user->email,
					'status' => $user->status,
					'created_at' => $user->created_at,
				]);
				return redirect()->route('home.profile', $decodeToken);
			}
		}

		// render profile
		return Inertia::render(
			'Profile/Profile'
		);
	}

}
