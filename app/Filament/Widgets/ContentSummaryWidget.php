<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\ContactSubmissionResource;
use App\Filament\Resources\ProjectResource;
use App\Models\ContactSubmission;
use App\Models\HouseType;
use App\Models\JobListing;
use App\Models\PressArticle;
use App\Models\Project;
use App\Models\TeamMember;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ContentSummaryWidget extends StatsOverviewWidget
{
    protected static ?int $sort = 1;

    protected int|string|array $columnSpan = 'full';

    protected function getStats(): array
    {
        return [
            Stat::make('Projects', Project::count())
                ->description(Project::where('status', 'published')->count() . ' published')
                ->descriptionIcon('heroicon-m-check-circle')
                ->color('success')
                ->url(ProjectResource::getUrl('index')),

            Stat::make('House Types', HouseType::count())
                ->description('Across all projects')
                ->descriptionIcon('heroicon-m-home')
                ->color('primary'),

            Stat::make('Team Members', TeamMember::where('is_active', true)->count())
                ->description(TeamMember::count() . ' total')
                ->descriptionIcon('heroicon-m-user-group')
                ->color('primary'),

            Stat::make('Press Articles', PressArticle::where('is_active', true)->count())
                ->description('Active articles')
                ->descriptionIcon('heroicon-m-newspaper')
                ->color('primary'),

            Stat::make('Open Jobs', JobListing::where('is_active', true)->count())
                ->description('Accepting applications')
                ->descriptionIcon('heroicon-m-briefcase')
                ->color('primary'),

            Stat::make('Media Files', Media::count())
                ->description('Images & documents')
                ->descriptionIcon('heroicon-m-photo')
                ->color('gray'),

            Stat::make('Contact submissions', ContactSubmission::count())
                ->description(ContactSubmission::new()->count() . ' new')
                ->descriptionIcon('heroicon-m-envelope')
                ->color('warning')
                ->url(ContactSubmissionResource::getUrl('index')),
        ];
    }
}
