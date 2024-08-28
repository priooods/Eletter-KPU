<?php

use Illuminate\Support\Facades\Route;
use Modules\Letter\Http\Controllers\LetterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group([], function () {
    Route::resource('letter', LetterController::class)->names('letter');
});
