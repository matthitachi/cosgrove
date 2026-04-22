<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PressArticleResource;
use App\Models\PressArticle;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PressApiController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $articles = PressArticle::active()
            ->ordered()
            ->orderBy('published_date', 'desc')
            ->get();

        return PressArticleResource::collection($articles);
    }
}
