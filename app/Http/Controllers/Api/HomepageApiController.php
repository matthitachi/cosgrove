<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\HomepageStatResource;
use App\Http\Resources\SmartFeatureResource;
use App\Http\Resources\SocialLinkResource;
use App\Models\ContactInfo;
use App\Models\HomepageStat;
use App\Models\SmartFeature;
use App\Models\SocialLink;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class HomepageApiController extends Controller
{
    public function stats(): AnonymousResourceCollection
    {
        $stats = HomepageStat::ordered()->get();

        return HomepageStatResource::collection($stats);
    }

    public function contact(): JsonResponse
    {
        $contact = ContactInfo::all()
            ->keyBy('key')
            ->map(fn ($c) => $c->value);

        return response()->json(['data' => $contact]);
    }

    public function social(): AnonymousResourceCollection
    {
        $links = SocialLink::active()->ordered()->get();

        return SocialLinkResource::collection($links);
    }

    public function features(): AnonymousResourceCollection
    {
        $features = SmartFeature::active()->ordered()->get();

        return SmartFeatureResource::collection($features);
    }
}
