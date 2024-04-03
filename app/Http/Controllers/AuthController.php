<?php

namespace App\Http\Controllers;

use App\Models\User;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AuthController extends Controller {

	public function login(Request $request) {
		$tokenValue = $request->session()->get('lx_token');
		$user = User::where('token', $tokenValue)->first();

		if ($tokenValue) {
			if ($user?->token == $tokenValue) {
				return redirect()->route('home');
			}
		} else {
			$this->logout($request);
		}

		return Inertia::render('Authentication/Login');
	}

	public function verifyLogin(Request $request) {
		$email = base64_decode($request->email);
		$password = base64_decode($request->password);

		$dataUser = [
			'email' => $email,
			'password' => $password,
		];

		$validator = Validator::make($dataUser, [
			'email' => 'required|email',
			'password' => 'required|min:8',
		]);

		if ($validator->fails()) {
			return response()->json([
				'status' => 'error',
				$validator->errors(),
			]);
		}

		$checkUser = User::where('email', $email)->first();

		if ($checkUser) {
			if (Hash::check($password, $checkUser->password)) {

				// create session server side
				$request->session()->put('lx_token', $checkUser->token);

				return response()->json([
					'status' => 'success',
					'message' => 'Pengguna berhasil masuk',
				]);
			} else {
				return response()->json([
					'status' => 'error',
					'message' => 'Password salah, silahkan coba lagi',
				]);
			}
		} else {
			return response()->json([
				'status' => 'error',
				'message' => 'Email tidak terdaftar',
			]);
		}
	}

	public function register($parmid) {
		return Inertia::render('Authentication/Register');
	}

	public function createToken($name, $email, $registerId) {
		// with JWT
		$payload = [
			'name' => $name,
			'email' => $email,
			'iat' => time(),
		];

		$token = JWT::encode($payload, $registerId, 'HS256');
		return $token;
	}

	public function verifyRegistered(Request $request) {
		$name = base64_decode($request->name);
		$email = base64_decode($request->email);
		$password = base64_decode($request->password);

		// generate token with jwt
		$registerId = base64_decode($request->registerId);
		$token = $this->createToken($name, $email, $registerId);

		$dataUser = [
			'name' => $name,
			'email' => $email,
			'password' => $password,
			'registerId' => $registerId,
			'token' => $token,
		];

		$validator = Validator::make($dataUser, [
			'name' => 'required',
			'email' => 'required|email',
			'password' => 'required|min:8',
			'registerId' => 'required',
			'token' => 'required',
		]);

		if ($validator->fails()) {
			return response()->json([
				'status' => 'error',
				$validator->errors(),
			]);
		}

		$checkUser = User::where('email', $email)->first();

		if (!$checkUser) {
			User::create([
				'name' => $name,
				'email' => $email,
				'password' => $password,
				'registerId' => $registerId,
				'token' => $token,
			]);
			return response()->json([
				'status' => 'success',
				'message' => 'User created successfully',
			]);
		} else {
			return response()->json([
				'status' => 'error',
				'message' => 'User already exists',
			]);
		}
	}

	public function logout(Request $request) {

		$user = User::where('token', $request->session()->get('lx_token'))->first();

		if ($user) {
			$user->status = "offline";
			$request->session()->forget('lx_token');
		}

		return redirect()->route('login');
	}
}
