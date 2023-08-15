<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [App\Http\Controllers\HomeController::class, 'index']);
Route::get('/projects', [App\Http\Controllers\HomeController::class, 'projects']);
Route::get('/project-details', [App\Http\Controllers\HomeController::class, 'projectDetails']);
Route::get('/about', [App\Http\Controllers\HomeController::class, 'about']);
