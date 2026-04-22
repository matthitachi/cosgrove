<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HomepageStatResource\Pages;
use App\Models\HomepageStat;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class HomepageStatResource extends Resource
{
    protected static ?string $model = HomepageStat::class;

    protected static ?string $navigationIcon = 'heroicon-o-chart-bar';

    protected static ?string $navigationGroup = 'Content';

    protected static ?int $navigationSort = 4;

    protected static ?string $modelLabel = 'Homepage Stat';

    protected static ?string $pluralModelLabel = 'Homepage Stats';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Stat')
                ->columns(2)
                ->schema([
                    Forms\Components\TextInput::make('label')
                        ->required()
                        ->maxLength(255)
                        ->placeholder('e.g. Projects Delivered'),

                    Forms\Components\TextInput::make('count_value')
                        ->label('Display value')
                        ->required()
                        ->maxLength(100)
                        ->placeholder('e.g. 200+'),

                    Forms\Components\TextInput::make('icon')
                        ->label('Icon identifier')
                        ->maxLength(255)
                        ->helperText('Icon class or name used in the frontend'),

                    Forms\Components\TextInput::make('sort_order')
                        ->label('Display order')
                        ->numeric()
                        ->default(0),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('label')
                    ->searchable(),

                Tables\Columns\TextColumn::make('count_value')
                    ->label('Value'),

                Tables\Columns\TextColumn::make('sort_order')
                    ->label('Order')
                    ->sortable(),

                Tables\Columns\TextColumn::make('updated_at')
                    ->since()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('sort_order')
            ->reorderable('sort_order')
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListHomepageStats::route('/'),
            'create' => Pages\CreateHomepageStat::route('/create'),
            'edit'   => Pages\EditHomepageStat::route('/{record}/edit'),
        ];
    }
}
