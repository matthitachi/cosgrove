<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactSubmissionResource\Pages;
use App\Filament\Widgets\ContactSubmissionStatsWidget;
use App\Models\ContactSubmission;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class ContactSubmissionResource extends Resource
{
    protected static ?string $model = ContactSubmission::class;

    protected static ?string $navigationIcon = 'heroicon-o-envelope';

    protected static ?string $navigationGroup = 'Leads';

    protected static ?int $navigationSort = 2;

    protected static ?string $modelLabel = 'Contact Submission';

    protected static ?string $pluralModelLabel = 'Contact Submissions';

    public static function getNavigationBadge(): ?string
    {
        return (string) static::getModel()::new()->count() ?: null;
    }

    public static function getNavigationBadgeColor(): string|array|null
    {
        return static::getModel()::new()->count() > 0 ? 'warning' : null;
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist->schema([
            Section::make('Submission details')
                ->columns(2)
                ->schema([
                    TextEntry::make('name'),
                    TextEntry::make('email')
                        ->copyable()
                        ->icon('heroicon-m-envelope'),
                    TextEntry::make('phone')
                        ->copyable()
                        ->icon('heroicon-m-phone')
                        ->default('—'),
                    TextEntry::make('project')
                        ->label('Project interest')
                        ->default('—'),
                    TextEntry::make('source_label')
                        ->label('Source'),
                    TextEntry::make('submitted_at')
                        ->label('Submitted')
                        ->dateTime('M d, Y H:i'),
                ]),

            Section::make('Message')
                ->schema([
                    TextEntry::make('message')
                        ->label('')
                        ->default('No message provided.')
                        ->columnSpanFull(),
                ]),

            Section::make('Status & notes')
                ->schema([
                    TextEntry::make('status')
                        ->badge()
                        ->color(fn (string $state): string => match ($state) {
                            'new'     => 'warning',
                            'read'    => 'info',
                            'replied' => 'success',
                            default   => 'gray',
                        }),
                    TextEntry::make('notes')
                        ->label('Internal notes')
                        ->default('No notes.')
                        ->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('submitted_at', 'desc')
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),

                Tables\Columns\TextColumn::make('email')
                    ->searchable()
                    ->copyable()
                    ->icon('heroicon-m-envelope'),

                Tables\Columns\TextColumn::make('phone')
                    ->searchable()
                    ->copyable()
                    ->default('—')
                    ->icon('heroicon-m-phone'),

                Tables\Columns\TextColumn::make('project')
                    ->label('Project interest')
                    ->searchable()
                    ->default('—'),

                Tables\Columns\TextColumn::make('message')
                    ->label('Message')
                    ->limit(80)
                    ->tooltip(fn ($record) => $record->message ?? '')
                    ->placeholder('—'),

                Tables\Columns\TextColumn::make('source')
                    ->label('Source')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'footer' => 'gray',
                        default  => 'info',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'footer' => 'Footer',
                        default  => 'Contact page',
                    }),

                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'new'     => 'warning',
                        'read'    => 'info',
                        'replied' => 'success',
                        default   => 'gray',
                    })
                    ->sortable(),

                Tables\Columns\TextColumn::make('submitted_at')
                    ->label('Submitted')
                    ->dateTime('M d, Y H:i')
                    ->sortable()
                    ->since(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options(ContactSubmission::statuses())
                    ->label('Status'),

                Tables\Filters\SelectFilter::make('source')
                    ->options([
                        'contact_page' => 'Contact page',
                        'footer'       => 'Footer form',
                    ])
                    ->label('Source'),

                Tables\Filters\Filter::make('submitted_at')
                    ->form([
                        DatePicker::make('from')->label('From'),
                        DatePicker::make('until')->label('Until'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when($data['from'],
                                fn ($q) => $q->whereDate('submitted_at', '>=', $data['from']))
                            ->when($data['until'],
                                fn ($q) => $q->whereDate('submitted_at', '<=', $data['until']));
                    }),

                Tables\Filters\TernaryFilter::make('has_project')
                    ->label('Has project')
                    ->trueLabel('With project')
                    ->falseLabel('Without project')
                    ->queries(
                        true:  fn (Builder $q) => $q->whereNotNull('project')->where('project', '!=', ''),
                        false: fn (Builder $q) => $q->where(fn ($q) => $q->whereNull('project')->orWhere('project', '')),
                        blank: fn (Builder $q) => $q,
                    ),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),

                Tables\Actions\Action::make('update_status')
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
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\BulkAction::make('mark_read')
                        ->label('Mark as read')
                        ->icon('heroicon-m-eye')
                        ->action(fn (Collection $records) => $records->each->update(['status' => 'read']))
                        ->requiresConfirmation()
                        ->deselectRecordsAfterCompletion(),

                    Tables\Actions\BulkAction::make('mark_replied')
                        ->label('Mark as replied')
                        ->icon('heroicon-m-check-circle')
                        ->color('success')
                        ->action(fn (Collection $records) => $records->each->update(['status' => 'replied']))
                        ->requiresConfirmation()
                        ->deselectRecordsAfterCompletion(),

                    Tables\Actions\BulkAction::make('export')
                        ->label('Export CSV')
                        ->icon('heroicon-m-arrow-down-tray')
                        ->action(function (Collection $records) {
                            $csv = "Name,Email,Phone,Project,Message,Source,Status,Submitted\n";
                            foreach ($records as $r) {
                                $csv .= implode(',', [
                                    '"' . $r->name . '"',
                                    '"' . $r->email . '"',
                                    '"' . ($r->phone ?? '') . '"',
                                    '"' . ($r->project ?? '') . '"',
                                    '"' . str_replace('"', '""', $r->message ?? '') . '"',
                                    '"' . $r->source_label . '"',
                                    '"' . $r->status . '"',
                                    '"' . $r->submitted_at?->format('Y-m-d H:i') . '"',
                                ]) . "\n";
                            }
                            return response()->streamDownload(
                                fn () => print($csv),
                                'contact-submissions-' . now()->format('Y-m-d') . '.csv',
                                ['Content-Type' => 'text/csv']
                            );
                        })
                        ->deselectRecordsAfterCompletion(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContactSubmissions::route('/'),
            'view'  => Pages\ViewContactSubmission::route('/{record}'),
        ];
    }
}
