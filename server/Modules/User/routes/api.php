<?php

use Illuminate\Support\Facades\Route;
use Modules\User\Http\Controllers\UserController;

/*
 *--------------------------------------------------------------------------
 * API Routes
 *--------------------------------------------------------------------------
 *
 * Here is where you can register API routes for your application. These
 * routes are loaded by the RouteServiceProvider within a group which
 * is assigned the "api" middleware group. Enjoy building your API!
 *
*/

Route::prefix('v1/user')->group(function () {
    Route::post('register', [UserController::class,'store']);
    Route::post('login', [UserController::class,'login']);
    Route::middleware('auth:sanctum')->group( function () {
        Route::get('show', [UserController::class,'show']);
        Route::get('index', [UserController::class,'index']);
        Route::get('logout', [UserController::class,'logout']);
        Route::delete('delete/{id}', [UserController::class,'destroy']);
    });
});
