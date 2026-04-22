<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TeamMemberResource;
use App\Models\TeamMember;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TeamApiController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $members = TeamMember::active()->ordered()->get();

        return TeamMemberResource::collection($members);
    }
}
