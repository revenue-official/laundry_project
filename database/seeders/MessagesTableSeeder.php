<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MessagesTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 */

	protected $order = 2;

	public function run(): void {
		DB::table('messages')->insert([
			'user_id' => '1',
			'message' => 'Haii',
			'created_at' => now(),
			'updated_at' => now(),
		]);

		DB::table('messages')->insert([
			'user_id' => '2',
			'message' => 'Haii i so happy',
			'created_at' => now(),
			'updated_at' => now(),
		]);

		DB::table('messages')->insert([
			'user_id' => '3',
			'message' => 'Love you',
			'created_at' => now(),
			'updated_at' => now(),
		]);

		DB::table('messages')->insert([
			'user_id' => '4',
			'message' => 'Layoout you',
			'created_at' => now(),
			'updated_at' => now(),
		]);

	}
}
