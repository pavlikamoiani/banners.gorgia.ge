<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReferenceController;
use App\Http\Controllers\FilterController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/filters', [FilterController::class, 'index']);
    Route::post('/filters', [FilterController::class, 'store']);
    Route::delete('/filters/{id}', [FilterController::class, 'destroy']);
});
