<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactInfoResource\Pages;
use App\Models\ContactInfo;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ContactInfoResource extends Resource
{
    protected static ?string $model = ContactInfo::class;

    protected static ?string $navigationIcon = 'heroicon-o-phone';

    protected static ?string $navigationGroup = 'Settings';

    protected static ?int $navigationSort = 1;

    protected static ?string $modelLabel = 'Contact Info';

    protected static ?string $pluralModelLabel = 'Contact Info';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Contact Entry')
                ->columns(2)
                ->schema([
                    Forms\Components\TextInput::make('key')
                        ->label('Key identifier')
                        ->required()
                        ->maxLength(100)
                        ->unique(table: 'contact_info', column: 'key', ignoreRecord: true)
                        ->helperText('e.g. phone_main, email_sales, address_hq')
                        ->disabled(fn (string $operation): bool => $operation === 'edit')
                        ->dehydrated(fn (string $operation): bool => $operation !== 'edit'),

                    Forms\Components\TextInput::make('label')
                        ->label('Admin label')
                        ->maxLength(255),

                    Forms\Components\Select::make('type')
                        ->options([
                            'text'  => 'Text',
                            'email' => 'Email',
                            'phone' => 'Phone',
                            'url'   => 'URL',
                        ])
                        ->required()
                        ->default('text')
                        ->native(false),

                    Forms\Components\Textarea::make('value')
                        ->label('Value')
                        ->required()
                        ->rows(2)
                        ->columnSpanFull(),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('key')
                    ->searchable()
                    ->fontFamily('mono'),

                Tables\Columns\TextColumn::make('label')
                    ->label('Label')
                    ->searchable(),

                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'email' => 'info',
                        'phone' => 'success',
                        'url'   => 'warning',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('value')
                    ->limit(60)
                    ->wrap(),

                Tables\Columns\TextColumn::make('updated_at')
                    ->since(),
            ])
            ->defaultSort('id')
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
            'index'  => Pages\ListContactInfos::route('/'),
            'create' => Pages\CreateContactInfo::route('/create'),
            'edit'   => Pages\EditContactInfo::route('/{record}/edit'),
        ];
    }
}
