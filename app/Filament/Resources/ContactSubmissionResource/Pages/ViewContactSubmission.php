<?php

namespace App\Filament\Resources\ContactSubmissionResource\Pages;

use App\Filament\Resources\ContactSubmissionResource;
use App\Models\ContactSubmission;
use Filament\Actions;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Pages\ViewRecord;

class ViewContactSubmission extends ViewRecord
{
    protected static string $resource = ContactSubmissionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('update_status')
                ->icon('heroicon-m-arrow-path')
                ->label('Update status')
                ->form([
                    Select::make('status')
                        ->options(ContactSubmission::statuses())
                        ->required()
                        ->native(false),
                    Textarea::make('notes')
                        ->rows(3)
                        ->label('Internal notes'),
                ])
                ->fillForm(fn (ContactSubmission $record): array => [
                    'status' => $record->status,
                    'notes'  => $record->notes,
                ])
                ->action(function (ContactSubmission $record, array $data): void {
                    $record->update([
                        'status' => $data['status'],
                        'notes'  => $data['notes'] ?? $record->notes,
                    ]);
                })
                ->modalHeading('Update submission status')
                ->modalWidth('md'),

            Actions\Action::make('back')
                ->label('Back to list')
                ->url(ContactSubmissionResource::getUrl('index'))
                ->color('gray'),
        ];
    }
}
