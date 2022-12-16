<?php

use App\Http\Controllers\AdminController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\PeriodController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersControllers;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get(
    "/redirectAuthenticatedUsers",
    [RedirectAuthenticatedUsersControllers::class, "home"]
)->middleware(['auth']);

/*------------------------------------------
--------------------------------------------
All Normal Users Routes List
--------------------------------------------
--------------------------------------------*/
Route::middleware(['auth', 'checkRole:user'])->group(function () {
    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('User/Home');
    })->name('dashboard');
    Route::get('/form-registration', function () {
        return Inertia::render('User/Form/RegisterForm');
    })->name('register-form');
});

/*------------------------------------------
--------------------------------------------
All Admin Routes List
--------------------------------------------
--------------------------------------------*/
Route::middleware(['auth', 'checkRole:admin'])->group(function () {
    // Dashboard
    Route::controller(AdminController::class)->group(function () {
        Route::get('/admin', 'index')->name('admin-dashboard');

        Route::get('/admin/course', 'index')->name('admin-course');
        Route::get('/admin/course/add', 'index')->name('admin-course-add');
        Route::post('/admin/course/add', 'storeCourse')->name('admin-course-post');
        Route::get('/admin/course/{id}', 'index')->name('admin-course-edit');
        Route::put('/admin/course/{id}', 'updateCourse')->name('admin-course-update');
        Route::delete('/admin/course/{id}', 'destroyCourse')->name('admin-course-delete');

        Route::get('/admin/period', 'index')->name('admin-period');
        Route::get('/admin/period/add', 'index')->name('admin-period-add');
        Route::post('/admin/period/add', 'storePeriod')->name('admin-period-post');
        Route::get('/admin/period/{id}', 'index')->name('admin-period-edit');
        Route::put('/admin/period/{id}', 'updatePeriod')->name('admin-period-update');
        Route::delete('/admin/period/{id}', 'destroyPeriod')->name('admin-period-delete');
    });
});

/*------------------------------------------
--------------------------------------------
Profile Routes List
--------------------------------------------
--------------------------------------------*/
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
