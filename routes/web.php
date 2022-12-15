<?php

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\PeriodController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersControllers;
use App\Models\Period;

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
});

/*------------------------------------------
--------------------------------------------
All Admin Routes List
--------------------------------------------
--------------------------------------------*/
Route::middleware(['auth', 'checkRole:admin'])->group(function () {
    // Dashboard
    Route::get('/admin', function () {
        $courses = Course::latest()->paginate(10);
        $periods = Period::latest()->paginate(10);
        return Inertia::render('Admin/Index', ['courses' => $courses, 'periods' => $periods]);
    })->name('admin-dashboard');

    Route::controller(CourseController::class)->group(function () {
        Route::get('/admin/course', 'adminIndex')->name('admin-course');
        Route::get('/admin/course/add', 'create')->name('admin-course-add');
        Route::post('/admin/course/add', 'store')->name('admin-course-post');
        Route::get('/admin/course/{id}', 'edit')->name('admin-course-edit');
        Route::put('/admin/course/{id}', 'update')->name('admin-course-update');
        Route::delete('/admin/course/{id}', 'destroy')->name('admin-course-delete');
    });

    Route::controller(PeriodController::class)->group(function () {
        Route::get('/admin/period', 'adminIndex')->name('admin-period');
        Route::get('/admin/period/add', 'create')->name('admin-period-add');
        Route::post('/admin/period/add', 'store')->name('admin-period-post');
        Route::get('/admin/period/{id}', 'edit')->name('admin-period-edit');
        Route::put('/admin/period/{id}', 'update')->name('admin-period-update');
        Route::delete('/admin/period/{id}', 'destroy')->name('admin-period-delete');
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
