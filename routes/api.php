<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\TransactionController;
use App\Models\Transaction;
use App\Models\User;
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
Route::get('users', function () {
    return User::all();

});

// Route::get('/transaction',[TransactionController::class, 'index']);
// Route::post('/transaction',[TransactionController::class, 'store']);
// Route::get('/transaction/{id}',[TransactionController::class, 'show']);
// Route::put('/transaction/{id}',[TransactionController::class, 'update']);
// Route::delete('/transaction/{id}',[TransactionController::class, 'destroy']);

// Route::resource('/transaction', TransactionController::class)->except(['create', 'edit']);
Route::apiResource('/transaction', TransactionController::class);
Route::apiResource('/article', ArticleController::class);
