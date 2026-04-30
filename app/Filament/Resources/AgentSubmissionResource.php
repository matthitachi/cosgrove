<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AgentSubmissionResource\Pages;
use App\Filament\Widgets\AgentSubmissionStatsWidget;
use App\Models\AgentSubmission;
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

class AgentSubmissionResource extends Resource
{
    protected static ?string $model = AgentSubmission::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-plus';

    protected static ?string $navigationGroup = 'Leads';

    protected static ?int $navigationSort = 1;

    protected static ?string $modelLabel = 'Agent Submission';

    protected static ?string $pluralModelLabel = 'Agent Submissions';

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
            Section::make('Agent details')
                ->columns(2)
                ->schema([
                    TextEntry::make('first_name')->label('First name'),
                    TextEntry::make('last_name')->label('Last name'),
                    TextEntry::make('email')
                        ->label('Email')
                        ->copyable()
                        ->icon('heroicon-m-envelope'),
                    TextEntry::make('phone')
                        ->label('Phone')
                        ->copyable()
                        ->icon('heroicon-m-phone'),
                    TextEntry::make('company')
                        ->label('Company')
                        ->default('—'),
                    TextEntry::make('submitted_at')
                        ->label('Submitted')
                        ->dateTime('M d, Y H:i'),
                ]),

            Section::make('Status & notes')
                ->schema([
                    TextEntry::make('status')
                        ->label('Status')
                        ->badge()
                        ->color(fn (string $state): string => match ($state) {
                            'new'       => 'warning',
                            'contacted' => 'info',
                            'approved'  => 'success',
                            'rejected'  => 'danger',
                            default     => 'gray',
                        }),
                    TextEntry::make('notes')
                        ->label('Internal notes')
                        ->default('No notes yet.')
                        ->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('submitted_at', 'desc')
            ->columns([
                Tables\Columns\TextColumn::make('full_name')
                    ->label('Name')
                    ->searchable(['first_name', 'last_name']),

                Tables\Columns\TextColumn::make('email')
                    ->searchable()
                    ->copyable()
                    ->icon('heroicon-m-envelope'),

                Tables\Columns\TextColumn::make('phone')
                    ->searchable()
                    ->copyable()
                    ->icon('heroicon-m-phone'),

                Tables\Columns\TextColumn::make('company')
                    ->label('Company')
                    ->default('—')
                    ->searchable(),

                Tables\Columns\TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'new'       => 'warning',
                        'contacted' => 'info',
                        'approved'  => 'success',
                        'rejected'  => 'danger',
                        default     => 'gray',
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
                    ->options(AgentSubmission::statuses())
                    ->label('Status'),

                Tables\Filters\Filter::make('submitted_at')
                    ->form([
                        DatePicker::make('from')->label('From date'),
                        DatePicker::make('until')->label('Until date'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when($data['from'],
                                fn ($q) => $q->whereDate('submitted_at', '>=', $data['from']))
                            ->when($data['until'],
                                fn ($q) => $q->whereDate('submitted_at', '<=', $data['until']));
                    }),

                Tables\Filters\TernaryFilter::make('has_company')
                    ->label('Has company')
                    ->nullable()
                    ->trueLabel('With company')
                    ->falseLabel('Without company')
                    ->queries(
                        true: fn (Builder $query) => $query->whereNotNull('company'),
                        false: fn (Builder $query) => $query->whereNull('company'),
                        blank: fn (Builder $query) => $query,
                    ),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),

                Tables\Actions\Action::make('update_status')
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
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\BulkAction::make('mark_contacted')
                        ->label('Mark as contacted')
                        ->icon('heroicon-m-chat-bubble-left')
                        ->action(fn (Collection $records) => $records->each->update(['status' => 'contacted']))
                        ->requiresConfirmation()
                        ->deselectRecordsAfterCompletion(),

                    Tables\Actions\BulkAction::make('mark_rejected')
                        ->label('Mark as rejected')
                        ->icon('heroicon-m-x-circle')
                        ->color('danger')
                        ->action(fn (Collection $records) => $records->each->update(['status' => 'rejected']))
                        ->requiresConfirmation()
                        ->deselectRecordsAfterCompletion(),

                    Tables\Actions\BulkAction::make('export')
                        ->label('Export CSV')
                        ->icon('heroicon-m-arrow-down-tray')
                        ->action(function (Collection $records) {
                            $csv = "First Name,Last Name,Email,Phone,Company,Status,Submitted At\n";
                            foreach ($records as $r) {
                                $csv .= implode(',', [
                                    $r->first_name,
                                    $r->last_name,
                                    $r->email,
                                    $r->phone,
                                    $r->company ?? '',
                                    $r->status,
                                    $r->submitted_at?->format('Y-m-d H:i'),
                                ]) . "\n";
                            }
                            return response()->streamDownload(
                                fn () => print($csv),
                                'agent-submissions-' . now()->format('Y-m-d') . '.csv',
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
            'index' => Pages\ListAgentSubmissions::route('/'),
            'view'  => Pages\ViewAgentSubmission::route('/{record}'),
        ];
    }
}
