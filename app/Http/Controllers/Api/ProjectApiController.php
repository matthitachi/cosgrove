<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectDetailResource;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProjectApiController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $projects = Project::published()
            ->ordered()
            ->withCount('houseTypes')
            ->get();

        return ProjectResource::collection($projects);
    }

    public function homeProjects(): AnonymousResourceCollection
    {
        $projects = Project::published()
            ->showInHome()
            ->ordered()
            ->get();

        return ProjectResource::collection($projects);
    }

    public function show(string $slug): ProjectDetailResource
    {
        $project = Project::published()
            ->where('slug', $slug)
            ->with([
                'houseTypes' => fn ($q) => $q->ordered(),
                'brochures'  => fn ($q) => $q->ordered(),
            ])
            ->firstOrFail();

        return new ProjectDetailResource($project);
    }
}
