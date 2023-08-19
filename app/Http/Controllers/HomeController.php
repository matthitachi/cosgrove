<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Home/index');
    }
    public function homeSearch()
    {
        return Inertia::render('HomeSearch/index');
    }
    public function projects()
    {
        return Inertia::render('Projects/index');
    }
    public function projectDetails()
    {
        return Inertia::render('ProjectDetails/index');
    }
    public function about()
    {
        return Inertia::render('About/index');
    }
    public function projectType()
    {
        return Inertia::render('ProjectType/index');
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
}
