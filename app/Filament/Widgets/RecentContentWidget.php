<?php

namespace App\Filament\Widgets;

use App\Models\JobListing;
use App\Models\PressArticle;
use App\Models\Project;
use Filament\Widgets\Widget;

class RecentContentWidget extends Widget
{
    protected static ?int $sort = 2;

    protected int|string|array $columnSpan = 'full';

    protected static string $view = 'filament.widgets.recent-content-widget';

    public function getRecentItems(): array
    {
        $projects = Project::query()
            ->latest('updated_at')
            ->limit(4)
            ->get()
            ->map(fn ($r) => [
                'title'      => $r->name,
                'type'       => 'Project',
                'badge'      => $r->status,
                'updated_at' => $r->updated_at,
            ]);

        $press = PressArticle::query()
            ->latest('updated_at')
            ->limit(4)
            ->get()
            ->map(fn ($r) => [
                'title'      => $r->headline,
                'type'       => 'Press',
                'badge'      => $r->is_active ? 'active' : 'inactive',
                'updated_at' => $r->updated_at,
            ]);

        $jobs = JobListing::query()
            ->latest('updated_at')
            ->limit(4)
            ->get()
            ->map(fn ($r) => [
                'title'      => $r->title,
                'type'       => 'Job',
                'badge'      => $r->is_active ? 'open' : 'closed',
                'updated_at' => $r->updated_at,
            ]);

        return $projects
            ->concat($press)
            ->concat($jobs)
            ->sortByDesc('updated_at')
            ->take(8)
            ->values()
            ->toArray();
    }
}
