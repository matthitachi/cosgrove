<?php

namespace App\Filament\Resources\ProjectResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Illuminate\Support\Str;

class HouseTypesRelationManager extends RelationManager
{
    protected static string $relationship = 'houseTypes';

    protected static ?string $title = 'House Types';

    public function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('House Type Details')
                ->columns(2)
                ->schema([
                    Forms\Components\TextInput::make('name')
                        ->required()
                        ->maxLength(255)
                        ->live(onBlur: true)
                        ->afterStateUpdated(function (Get $get, Set $set, ?string $state): void {
                            if (empty($get('slug'))) {
                                $set('slug', Str::slug($state ?? ''));
                            }
                        }),

                    Forms\Components\TextInput::make('slug')
                        ->required()
                        ->maxLength(255)
                        ->unique(table: 'house_types', column: 'slug', ignoreRecord: true)
                        ->prefix('/')
                        ->helperText('Auto-generated from name. Edit carefully.'),

                    Forms\Components\TextInput::make('beds')
                        ->label('Bedrooms')
                        ->numeric()
                        ->minValue(0),

                    Forms\Components\TextInput::make('baths')
                        ->label('Bathrooms')
                        ->numeric()
                        ->minValue(0),

                    Forms\Components\TextInput::make('area')
                        ->label('Area')
                        ->maxLength(255)
                        ->placeholder('e.g. 120 sqm'),

                    Forms\Components\TextInput::make('price')
                        ->label('Price')
                        ->maxLength(255)
                        ->placeholder('e.g. ₦45,000,000'),

                    Forms\Components\TextInput::make('sort_order')
                        ->label('Display order')
                        ->numeric()
                        ->default(0),
                ]),

            Forms\Components\Section::make('Media')
                ->schema([
                    SpatieMediaLibraryFileUpload::make('images')
                        ->label('Images')
                        ->collection('images')
                        ->multiple()
                        ->image()
                        ->imageEditor()
                        ->reorderable()
                        ->columnSpanFull(),

                    SpatieMediaLibraryFileUpload::make('floorplan')
                        ->label('Floor plan')
                        ->collection('floorplan')
                        ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp', 'application/pdf'])
                        ->maxFiles(1)
                        ->columnSpanFull(),
                ]),
        ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                SpatieMediaLibraryImageColumn::make('images')
                    ->label('')
                    ->collection('images')
                    ->conversion('thumb')
                    ->width(60)
                    ->height(45),

                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('beds')
                    ->label('Beds')
                    ->numeric()
                    ->sortable(),

                Tables\Columns\TextColumn::make('baths')
                    ->label('Baths')
                    ->numeric()
                    ->sortable(),

                Tables\Columns\TextColumn::make('area')
                    ->toggleable(),

                Tables\Columns\TextColumn::make('price')
                    ->toggleable(),

                Tables\Columns\TextColumn::make('sort_order')
                    ->label('Order')
                    ->sortable(),
            ])
            ->defaultSort('sort_order')
            ->reorderable('sort_order')
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
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
}
