<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

use App\Http\Controllers\Api\HomepageApiController;
use App\Http\Controllers\Api\JobApiController;
use App\Http\Controllers\Api\PressApiController;
use App\Http\Controllers\Api\ProjectApiController;
use App\Http\Controllers\Api\TeamApiController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/v1')->group(function () {
    // Form submissions (existing — do not remove)
    Route::post('contact-details', [\App\Http\Controllers\ApiController::class, 'sendContact']);
    Route::post('agent-details',   [\App\Http\Controllers\ApiController::class, 'sendAgent']);
});

Route::prefix('v1')->middleware(['throttle:120,1'])->group(function () {
    // Projects — /projects/home must precede /projects/{slug}
    Route::get('/projects',          [ProjectApiController::class, 'index']);
    Route::get('/projects/home',     [ProjectApiController::class, 'homeProjects']);
    Route::get('/projects/{slug}',   [ProjectApiController::class, 'show']);

    // Team
    Route::get('/team',              [TeamApiController::class, 'index']);

    // Press
    Route::get('/press',             [PressApiController::class, 'index']);

    // Homepage data
    Route::get('/homepage/stats',    [HomepageApiController::class, 'stats']);
    Route::get('/homepage/contact',  [HomepageApiController::class, 'contact']);
    Route::get('/homepage/social',   [HomepageApiController::class, 'social']);
    Route::get('/homepage/features', [HomepageApiController::class, 'features']);

    // Jobs
    Route::get('/jobs',              [JobApiController::class, 'index']);
});
