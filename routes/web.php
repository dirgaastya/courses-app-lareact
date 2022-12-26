<?php

use App\Http\Controllers\AdminController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersControllers;
use App\Http\Controllers\UserController;

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

    Route::controller(UserController::class)->group(function () {
        Route::get('/form-registration', 'registrationUserDetailIndex')->name('register-user-detail')->middleware(['checkStatus:0']);
        // Route::get('/form-registration', 'registrationUserDetailIndexActived')->name('register-user-detail-actived')->middleware(['checkStatus:1']);
        Route::post('/form-registration', 'storeUserDetail')->name('add-user-detail')->middleware(['checkStatus:0']);
    });
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

        Route::get('/admin/category', 'index')->name('admin-category');
        Route::get('/admin/category/add', 'index')->name('admin-category-add');
        Route::post('/admin/category/add', 'storeCategory')->name('admin-category-post');
        Route::get('/admin/category/{id}', 'index')->name('admin-category-edit');
        Route::put('/admin/category/{id}', 'updateCategory')->name('admin-category-update');
        Route::delete('/admin/category/{id}', 'destroyCategory')->name('admin-category-delete');

        Route::get('/admin/student', 'index')->name('admin-student');
        Route::get('/admin/student/{id}', 'index')->name('admin-student-detail');
        Route::get('/admin/student/edit/{id}', 'index')->name('admin-student-edit');
        Route::put('/admin/student/edit/{id}', 'updateStudent')->name('admin-student-update');
        Route::delete('/admin/student/{id}', 'destroyStudent')->name('admin-student-delete');
    });
});

/*------------------------------------------
--------------------------------------------
Profile Routes List
--------------------------------------------
--------------------------------------------*/
Route::middleware(['auth', 'checkStatus:1'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
