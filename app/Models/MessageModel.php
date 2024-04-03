<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MessageModel extends Model {
	use HasFactory;

	protected $table = 'messages';

	protected $primaryKey = 'id';

	protected $fillable = [
		"user_id",
		"name",
		"message",
		"created_at",
		"updatec_at",
	];
}
