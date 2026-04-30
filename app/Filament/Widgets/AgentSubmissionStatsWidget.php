<?php

namespace App\Filament\Widgets;

use App\Models\AgentSubmission;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class AgentSubmissionStatsWidget extends StatsOverviewWidget
{
    protected static ?string $pollingInterval = null;

    protected int|string|array $columnSpan = 'full';

    protected function getStats(): array
    {
        return [
            Stat::make('Total submissions', AgentSubmission::count())
                ->color('gray'),
            Stat::make('New', AgentSubmission::new()->count())
                ->color('warning')
                ->descriptionIcon('heroicon-m-clock'),
            Stat::make('Contacted', AgentSubmission::contacted()->count())
                ->color('info'),
            Stat::make('Approved', AgentSubmission::approved()->count())
                ->color('success'),
            Stat::make('Rejected', AgentSubmission::rejected()->count())
                ->color('danger'),
        ];
    }
}
