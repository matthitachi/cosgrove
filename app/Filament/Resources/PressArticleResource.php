<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PressArticleResource\Pages;
use App\Models\PressArticle;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PressArticleResource extends Resource
{
    protected static ?string $model = PressArticle::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';

    protected static ?string $navigationGroup = 'Content';

    protected static ?int $navigationSort = 2;

    protected static ?string $modelLabel = 'Press Article';

    protected static ?string $pluralModelLabel = 'Press Articles';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Article Details')
                ->columns(2)
                ->schema([
                    Forms\Components\TextInput::make('headline')
                        ->required()
                        ->maxLength(255)
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('publication')
                        ->maxLength(255),

                    Forms\Components\DatePicker::make('published_date')
                        ->displayFormat('M d, Y'),

                    Forms\Components\TextInput::make('external_url')
                        ->label('Article URL')
                        ->url()
                        ->maxLength(512)
                        ->columnSpanFull(),

                    Forms\Components\TextInput::make('sort_order')
                        ->label('Display order')
                        ->numeric()
                        ->default(0),

                    Forms\Components\Toggle::make('is_active')
                        ->label('Visible on site')
                        ->default(true),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('headline')
                    ->searchable()
                    ->limit(50)
                    ->wrap(),

                Tables\Columns\TextColumn::make('publication')
                    ->searchable(),

                Tables\Columns\TextColumn::make('published_date')
                    ->date('M d, Y')
                    ->sortable(),

                Tables\Columns\IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean(),

                Tables\Columns\TextColumn::make('sort_order')
                    ->label('Order')
                    ->sortable(),
            ])
            ->defaultSort('sort_order')
            ->filters([
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Active'),
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

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListPressArticles::route('/'),
            'create' => Pages\CreatePressArticle::route('/create'),
            'edit'   => Pages\EditPressArticle::route('/{record}/edit'),
        ];
    }
}
