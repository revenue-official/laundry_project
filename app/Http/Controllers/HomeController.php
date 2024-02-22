<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'Home',
            [
                'title' => 'Home'
            ]
        );
    }
}
