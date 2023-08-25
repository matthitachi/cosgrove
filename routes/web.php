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
Route::get('/search', [App\Http\Controllers\HomeController::class, 'homeSearch']);
Route::get('/projects', [App\Http\Controllers\HomeController::class, 'projects']);
Route::get('/projects/{slug}', [App\Http\Controllers\HomeController::class, 'projectDetails']);
Route::get('/houses/{slug}', [App\Http\Controllers\HomeController::class, 'projectType']);
Route::get('/project-details', [App\Http\Controllers\HomeController::class, 'projectDetails']);
Route::get('/about', [App\Http\Controllers\HomeController::class, 'about']);
Route::get('/project-types', [App\Http\Controllers\HomeController::class, 'projectType']);
Route::get('/project-homes', [App\Http\Controllers\HomeController::class, 'projectHome']);
Route::get('/project-brochure', [App\Http\Controllers\HomeController::class, 'projectBrochure']);
Route::get('/contact', [App\Http\Controllers\HomeController::class, 'contact']);
