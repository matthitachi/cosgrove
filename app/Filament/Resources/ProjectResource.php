<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Filament\Resources\ProjectResource\RelationManagers;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use FilamentTiptapEditor\TiptapEditor;
use Illuminate\Support\Str;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-office-2';

    protected static ?string $navigationGroup = 'Content';

    protected static ?int $navigationSort = 1;

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $modelLabel = 'Project';

    protected static ?string $pluralModelLabel = 'Projects';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Tabs::make('Tabs')
                ->columnSpanFull()
                ->tabs([

                    Forms\Components\Tabs\Tab::make('Content')
                        ->schema([

                            Forms\Components\Section::make('Project Details')
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
                                        ->unique(table: 'projects', column: 'slug', ignoreRecord: true)
                                        ->prefix('/')
                                        ->helperText('Auto-generated from name. Edit carefully.'),

                                    Forms\Components\TextInput::make('location')
                                        ->maxLength(255),

                                    Forms\Components\Select::make('status')
                                        ->options([
                                            'draft'     => 'Draft',
                                            'published' => 'Published',
                                        ])
                                        ->required()
                                        ->default('draft')
                                        ->native(false),

                                    Forms\Components\Toggle::make('show_in_home')
                                        ->label('Show on homepage')
                                        ->helperText('Displays this project in the homepage projects section')
                                        ->columnSpanFull(),

                                    Forms\Components\TextInput::make('sort_order')
                                        ->label('Display order')
                                        ->numeric()
                                        ->default(0),
                                ]),

                            Forms\Components\Section::make('Description')
                                ->collapsible()
                                ->collapsed()
                                ->schema([
                                    TiptapEditor::make('description')
                                        ->profile('default')
                                        ->columnSpanFull(),
                                ]),

                            Forms\Components\Section::make('Gallery')
                                ->schema([
                                    SpatieMediaLibraryFileUpload::make('hero')
                                        ->label('Hero image')
                                        ->collection('hero')
                                        ->image()
                                        ->imageEditor()
                                        ->maxFiles(1)
                                        ->columnSpanFull(),

                                    SpatieMediaLibraryFileUpload::make('gallery')
                                        ->label('Gallery images')
                                        ->collection('gallery')
                                        ->multiple()
                                        ->image()
                                        ->imageEditor()
                                        ->reorderable()
                                        ->columnSpanFull(),
                                ]),
                        ]),

                    Forms\Components\Tabs\Tab::make('SEO')
                        ->icon('heroicon-o-magnifying-glass')
                        ->schema([
                            Forms\Components\Section::make('Search Engine Optimisation')
                                ->schema([
                                    Forms\Components\TextInput::make('meta_title')
                                        ->label('Meta title')
                                        ->maxLength(255)
                                        ->helperText('Leave blank to use project name. Recommended: 50–60 characters.')
                                        ->columnSpanFull(),

                                    Forms\Components\Textarea::make('meta_description')
                                        ->label('Meta description')
                                        ->rows(3)
                                        ->maxLength(500)
                                        ->helperText('Recommended: 150–160 characters.')
                                        ->columnSpanFull(),
                                ]),
                        ]),
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                SpatieMediaLibraryImageColumn::make('hero')
                    ->label('')
                    ->collection('hero')
                    ->conversion('thumb')
                    ->width(60)
                    ->height(45),

                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('location')
                    ->searchable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'published' => 'success',
                        'draft'     => 'warning',
                        default     => 'gray',
                    }),

                Tables\Columns\IconColumn::make('show_in_home')
                    ->label('Homepage')
                    ->boolean(),

                Tables\Columns\TextColumn::make('sort_order')
                    ->label('Order')
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('sort_order')
            ->reorderable('sort_order')
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft'     => 'Draft',
                        'published' => 'Published',
                    ]),
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

    public static function getRelations(): array
    {
        return [
            RelationManagers\HouseTypesRelationManager::class,
            RelationManagers\BrochuresRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit'   => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
