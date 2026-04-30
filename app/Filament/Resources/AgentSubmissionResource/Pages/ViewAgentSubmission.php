<?php

namespace App\Filament\Resources\AgentSubmissionResource\Pages;

use App\Filament\Resources\AgentSubmissionResource;
use App\Models\AgentSubmission;
use Filament\Actions;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Pages\ViewRecord;

class ViewAgentSubmission extends ViewRecord
{
    protected static string $resource = AgentSubmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('update_status')
                ->icon('heroicon-m-arrow-path')
                ->label('Update status')
                ->form([
                    Select::make('status')
                        ->options(AgentSubmission::statuses())
                        ->required()
                        ->native(false),
                    Textarea::make('notes')
                        ->rows(3)
                        ->label('Internal notes'),
                ])
                ->fillForm(fn (AgentSubmission $record): array => [
                    'status' => $record->status,
                    'notes'  => $record->notes,
                ])
                ->action(function (AgentSubmission $record, array $data): void {
                    $record->update([
                        'status' => $data['status'],
                        'notes'  => $data['notes'] ?? $record->notes,
                    ]);
                })
                ->modalHeading('Update submission status')
                ->modalWidth('md'),

            Actions\Action::make('back')
                ->label('Back to list')
                ->url(AgentSubmissionResource::getUrl('index'))
                ->color('gray'),
        ];
    }
}
