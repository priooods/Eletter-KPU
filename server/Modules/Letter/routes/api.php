<?php

use Illuminate\Support\Facades\Route;
use Modules\Letter\Http\Controllers\LetterController;

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

Route::middleware(['auth:sanctum'])->prefix('v1/letter')->group(function () {
    Route::post('store', [LetterController::class,'store']);
    Route::get('inletter', [LetterController::class,'myinLetter']);
    Route::get('outletter', [LetterController::class,'myoutLetter']);
    Route::post('disposisi', [LetterController::class,'update']);
});
