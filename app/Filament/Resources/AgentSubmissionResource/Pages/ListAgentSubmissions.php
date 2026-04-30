<?php

namespace App\Filament\Resources\AgentSubmissionResource\Pages;

use App\Filament\Resources\AgentSubmissionResource;
use App\Filament\Widgets\AgentSubmissionStatsWidget;
use Filament\Resources\Pages\ListRecords;

class ListAgentSubmissions extends ListRecords
{
    protected static string $resource = AgentSubmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }

    protected function getHeaderWidgets(): array
    {
        return [AgentSubmissionStatsWidget::class];
    }
}
