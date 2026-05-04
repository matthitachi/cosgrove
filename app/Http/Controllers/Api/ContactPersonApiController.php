<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContactPersonResource;
use App\Models\ContactPerson;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ContactPersonApiController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $persons = ContactPerson::active()->ordered()->get();

        return ContactPersonResource::collection($persons);
    }
}
