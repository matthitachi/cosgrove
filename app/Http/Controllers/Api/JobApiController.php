<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobListingResource;
use App\Models\JobListing;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class JobApiController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $jobs = JobListing::active()->ordered()->get();

        return JobListingResource::collection($jobs);
    }
}
