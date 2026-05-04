<?php

namespace App\Filament\Widgets;

use App\Models\ContactSubmission;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ContactSubmissionStatsWidget extends StatsOverviewWidget
{
    protected static ?string $pollingInterval = null;

    protected int|string|array $columnSpan = 'full';

    protected function getStats(): array
    {
        return [
            Stat::make('Total', ContactSubmission::count())
                ->color('gray'),
            Stat::make('New', ContactSubmission::new()->count())
                ->color('warning')
                ->descriptionIcon('heroicon-m-clock'),
            Stat::make('Read', ContactSubmission::read()->count())
                ->color('info'),
            Stat::make('Replied', ContactSubmission::replied()->count())
                ->color('success'),
            Stat::make('Contact page', ContactSubmission::where('source', ContactSubmission::SOURCE_CONTACT)->count())
                ->color('info')
                ->description('Via contact page'),
            Stat::make('Footer form', ContactSubmission::where('source', ContactSubmission::SOURCE_FOOTER)->count())
                ->color('gray')
                ->description('Via footer form'),
        ];
    }
}
