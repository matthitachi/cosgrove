<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class HomeController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Home/index');
    }
    public function homeSearch(Request $request)
    {
        return Inertia::render('HomeSearch/index', [
            'search' => $request->s
        ]);
    }
    public function projects()
    {
        return Inertia::render('Projects/index');
    }
    public function projectDetails($slug = null)
    {
        $data = ['slug' => $slug];
        return Inertia::render('ProjectDetails/index', $data);
    }
    public function about()
    {
        return Inertia::render('About/index');
    }
    public function projectType($slug = null)
    {
        $data = ['slug' => $slug];
        return Inertia::render('ProjectType/index', $data);
    }
    public function projectHome()
    {
        return Inertia::render('ProjectHomes/index');
    }
    public function projectBrochure()
    {
        return Inertia::render('ProjectBrochure/index');
    }
    public function contact()
    {
        return Inertia::render('Contact/index');
    }
    public function privacy()
    {
        return Inertia::render('Privacy/index');
    }
    public function press()
    {
        return Inertia::render('Press/index');
    }
}
