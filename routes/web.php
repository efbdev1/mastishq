<?php
/**
 * File name: web.php
 * Last modified: 20/07/21, 2:28 PM
 * Author: NearCraft - https://codecanyon.net/user/nearcraft
 * Copyright (c) 2021
 */

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\AppInstallController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\WebHookController;
use App\Http\Controllers\User\UserRedirectController;
use App\Http\Controllers\SpeechToTextController;

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

Route::get('/', [SiteController::class, 'index'])->name('welcome');
Route::get('/explore/{category}', [SiteController::class, 'explore'])->name('explore');
Route::get('/pricing', [SiteController::class, 'pricing'])->name('pricing');

Route::get('set-locale/{locale}', [HomeController::class, 'setLocale'])->name('locale');
Route::middleware(['auth:sanctum', 'verified'])->get('/home', [HomeController::class, 'index'])->name('home');

Route::get('install-success', [AppInstallController::class, 'onSuccessfulInstall'])->name('install_success');
Route::get('migrate', [AppInstallController::class, 'migrate'])->name('migrate');
Route::get('run-migrations', [AppInstallController::class, 'runMigrations'])->name('run_migrations');

/*
|---------------------------------------------------------------------------
| Redirected route from nictus app
|----------------------------------------------------------------------------
*/
Route::get('/redirect-qwiktest',[UserRedirectController::class,'checkAuth']);

/*
|--------------------------------------------------------------------------
| Webhook Routes
|--------------------------------------------------------------------------
*/
Route::post('webhooks/razorpay', [WebHookController::class, 'razorpay'])->name('webhooks.razorpay');
Route::post('webhooks/stripe', [WebHookController::class, 'stripe'])->name('webhooks.stripe');


/*
|-----------------------------------------------------------------------------
| MAil send Route
|-----------------------------------------------------------------------------
*/
Route::get('send-mail', function () {
   
    $details = [
        'title' => 'Mail from MastIshq',
        'body' => 'This is for testing email using smtp'
    ];
   
    \Mail::to('your_receiver_email@gmail.com')->send(new \App\Mail\MyTestMail($details));
   
    dd("Email is Sent.");
});
Route::get('my-demo-mail', [MailController::class, 'myDemoMail']);
Route::get('/stt',[SpeechToTextController::class,'index']);


