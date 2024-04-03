<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

// HomeController
Route::controller(HomeController::class)->group(function () {
	Route::get('/', 'index')->name('home');
	Route::get('/order', 'order')->name('order');
	Route::get('/setting', 'setting')->name('home.setting');
	Route::get('/profile/{token}', 'profile')->name('home.profile');
});

// ChatController
Route::controller(ChatController::class)->group(function () {
	Route::get('/chat', 'index')->name('chat');
	Route::post('/sendchat', 'store')->name('chat.store');
	Route::get('/chatlayout', 'layout')->name('chat.layout');
});

// AuthController
Route::controller(AuthController::class)->group(function () {
	Route::get('/login', 'login')->name('login');
	Route::post('/verifyLogin', 'verifyLogin')->name('verifyLogin');

	Route::get('/register/{parmid}', 'register')->name('register');
	Route::post('/verifyRegistered', 'verifyRegistered')->name('verifyRegistered');

	Route::get('/logout', 'logout')->name('logout');
});