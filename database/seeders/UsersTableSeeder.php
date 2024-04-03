<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 */
	protected $order = 1;

	public function run(): void {
		DB::table('users')->insert([
			'name' => 'admin',
			'email' => 'admin@laundry',
			'password' => bcrypt('admin'),
			'registerId' => "bGJyZnB6bzBnYw==",
			'status' => "online",
		]);
		DB::table('users')->insert([
			'name' => 'dian',
			'email' => 'dian@laundry',
			'password' => bcrypt('dian'),
			'registerId' => "bGJyZnB6bzBnYz==",
			'status' => "offline",
		]);
		DB::table('users')->insert([
			'name' => 'azmira',
			'email' => 'azmira@laundry',
			'password' => bcrypt('azmira'),
			'registerId' => "zGJyZnB6bzBnZw==",
			'status' => "offline",
		]);
		DB::table('users')->insert([
			'name' => 'gole',
			'email' => 'gole@laundry',
			'password' => bcrypt('gole'),
			'registerId' => "bGJxZnB6bzBnZA==",
			'status' => "online",
		]);

	}
}
