<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersControllers;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserController;
use App\Models\Course;
use App\Models\CourseCategory;
use App\Models\User;

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
    ]);
})->name('welcome');

Route::controller(CourseController::class)->group(function () {
    Route::get('/course', 'courseIndex')->name('course.list');
    Route::get('/course/{id}', 'courseDetail')->name('course.detail');
});

Route::get(
    "/redirectAuthenticatedUsers",
    [RedirectAuthenticatedUsersControllers::class, "home"]
)->middleware(['auth']);
Route::post('/transaction', [TransactionController::class, 'store'])->name('transaction.store')->middleware(['auth', 'checkRole:user', 'checkStatus:1']);

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
    Route::get('/admin', function () {
        $course = Course::latest()->take(1)->get();
        $category = CourseCategory::latest()->take(1)->get();
        $student = User::latest()->take(1)->get();
        return Inertia::render('Admin/Index', ['course' => $course, 'category' => $category, 'student' => $student]);
    })->name('admin.index');

    Route::prefix('/admin')->group(function () {
        Route::resource('course', CourseController::class);
        Route::resource('category', CategoryController::class);
        Route::resource('student', StudentController::class);
        Route::controller(TransactionController::class)->group(function () {
            Route::get('/transaction', 'index')->name('transaction.index');
        });
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
