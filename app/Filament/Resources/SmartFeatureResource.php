<?php

namespace App\Filament\Resources;

use App\Filament\Forms\Components\IconPickerField;
use App\Filament\Resources\SmartFeatureResource\Pages;
use App\Models\SmartFeature;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class SmartFeatureResource extends Resource
{
    protected static ?string $model = SmartFeature::class;

    protected static ?string $navigationIcon = 'heroicon-o-sparkles';

    protected static ?string $navigationGroup = 'Content';

    protected static ?int $navigationSort = 5;

    protected static ?string $modelLabel = 'Smart Feature';

    protected static ?string $pluralModelLabel = 'Smart Features';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Feature')
                ->columns(2)
                ->schema([
                    Forms\Components\TextInput::make('name')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\TextInput::make('sort_order')
                        ->label('Display order')
                        ->numeric()
                        ->default(0),

                    Forms\Components\Textarea::make('description')
                        ->rows(3)
                        ->columnSpanFull(),

                    Forms\Components\Toggle::make('is_active')
                        ->label('Visible on site')
                        ->default(true),
                ]),

            Forms\Components\Section::make('Icon')
                ->schema([
                    IconPickerField::make('icon_key')
                        ->label('Icon')
                        ->iconOptions(static::getIconOptions())
                        ->helperText('Select an icon. Renaming the feature will not change this.')
                        ->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),

                Tables\Columns\IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean(),

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
            'index'  => Pages\ListSmartFeatures::route('/'),
            'create' => Pages\CreateSmartFeature::route('/create'),
            'edit'   => Pages\EditSmartFeature::route('/{record}/edit'),
        ];
    }

    private static function getIconOptions(): array
    {
        $path = public_path('assets/images/features');
        if (! is_dir($path)) {
            return [];
        }

        return collect(scandir($path))
            ->filter(fn ($f) => str_ends_with($f, '.svg'))
            ->map(fn ($f) => [
                'key'   => str_replace('.svg', '', $f),
                'label' => ucfirst(str_replace('-', ' ', str_replace('.svg', '', $f))),
            ])
            ->sortBy('label')
            ->values()
            ->toArray();
    }
}
