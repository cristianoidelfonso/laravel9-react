<?php

use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Auth\AuthController;
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

Route::group(['prefix' => '/v1/auth'], function () {
    Route::post('/register', [AuthController::class, 'register'] );
    Route::post('/login', [AuthController::class, 'login'] );
    Route::post('/logout', [AuthController::class, 'logout'] );
    Route::post('/refresh', [AuthController::class, 'refresh'] );
    Route::post('/me', [AuthController::class, 'me'] );
});

Route::controller(ProductController::class)->prefix('v1')->group(function () {
    Route::get('/products', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
});
