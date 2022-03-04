<?php

use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['auth' => 'auth', 'middleware' => 'api'], function ($router) {
    Route::post('/login', \App\Http\Controllers\Auth\AuthController::class, 'login' );
    Route::post('/logout', \App\Http\Controllers\Auth\AuthController::class, 'logout' );
    Route::post('/refresh', \App\Http\Controllers\Auth\AuthController::class, 'refresh' );
    Route::post('/me', \App\Http\Controllers\Auth\AuthController::class, 'me' );
    Route::post('/register', \App\Http\Controllers\Auth\AuthController::class, 'register' );
});

Route::controller(ProductController::class)->prefix('v1')->group(function () {
    Route::get('/products', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
});
