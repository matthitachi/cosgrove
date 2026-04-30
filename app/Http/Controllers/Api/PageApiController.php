<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PageDetailResource;
use App\Http\Resources\PageResource;
use App\Models\Page;

class PageApiController extends Controller
{
    public function index()
    {
        $pages = Page::published()
                     ->ordered()
                     ->get();

        return PageResource::collection($pages);
    }

    public function show(string $slug)
    {
        $page = Page::published()
                    ->where('slug', $slug)
                    ->with(['sections' => fn ($q) =>
                        $q->active()->ordered()
                    ])
                    ->firstOrFail();

        return new PageDetailResource($page);
    }
}
