<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PageResource\Pages;
use App\Models\Page;
use App\Models\PageSection;
use FilamentTiptapEditor\TiptapEditor;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Forms\Set;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class PageResource extends Resource
{
    protected static ?string $model = Page::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'Content';

    protected static ?int $navigationSort = 0;

    protected static ?string $modelLabel = 'Page';

    protected static ?string $pluralModelLabel = 'Pages';

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Tabs::make('Tabs')
                ->tabs([

                    // ── Content ────────────────────────────────────────────
                    Tabs\Tab::make('Content')
                        ->schema([
                            Section::make('Page details')
                                ->columns(2)
                                ->schema([
                                    TextInput::make('title')
                                        ->required()
                                        ->maxLength(255)
                                        ->live(onBlur: true)
                                        ->afterStateUpdated(function ($state, Set $set, Get $get) {
                                            if (blank($get('slug'))) {
                                                $set('slug', Str::slug($state));
                                            }
                                        }),

                                    TextInput::make('slug')
                                        ->required()
                                        ->unique(Page::class, 'slug', ignoreRecord: true)
                                        ->prefix('/')
                                        ->maxLength(100)
                                        ->helperText('Auto-generated from title. Changing this on a published page will break existing links.')
                                        ->disabled(fn ($record) => $record?->is_system)
                                        ->dehydrated(),
                                ]),

                            Section::make('Sections')
                                ->description('Add and reorder the content sections for this page.')
                                ->schema([
                                    Repeater::make('sectionsData')
                                        ->label('Sections')
                                        ->schema([
                                            Grid::make(3)->schema([
                                                TextInput::make('label')
                                                    ->required()
                                                    ->maxLength(255)
                                                    ->label('Section name')
                                                    ->helperText('Admin reference only'),

                                                Select::make('type')
                                                    ->required()
                                                    ->native(false)
                                                    ->label('Section type')
                                                    ->options([
                                                        'hero'             => 'Hero',
                                                        'about_snippet'    => 'About snippet',
                                                        'about_intro'      => 'About — Intro',
                                                        'about_body'       => 'About — Body',
                                                        'about_mission'    => 'About — Mission',
                                                        'about_vision'     => 'About — Vision',
                                                        'about_awards'     => 'About — Awards',
                                                        'about_creativity' => 'About — Creativity',
                                                        'about_stats'      => 'About — Stats & Support',
                                                        'quote'            => 'Quote banner',
                                                        'text'             => 'Text / Rich text',
                                                        'stats'            => 'Stats',
                                                        'team'             => 'Team',
                                                        'projects'         => 'Projects',
                                                        'services'         => 'Services',
                                                        'press'            => 'Press',
                                                        'features'         => 'Smart features',
                                                        'cta'              => 'Call to action',
                                                        'contact_form'     => 'Contact form',
                                                        'contact_team'     => 'Contact team',
                                                        'agent_form'       => 'Agent registration form',
                                                    ])
                                                    ->live(),

                                                Toggle::make('is_active')
                                                    ->label('Active')
                                                    ->default(true)
                                                    ->inline(false),
                                            ]),

                                            Section::make('Section content')
                                                ->schema(fn (Get $get): array => match ($get('type')) {

                                                    'hero' => [
                                                        TextInput::make('data.heading')
                                                            ->label('Heading')
                                                            ->helperText('Supports HTML: use <br> for line breaks, <b>text</b> for bold. e.g. Welcome to a New <br>Era of <b>Smart Living</b>.'),
                                                        TextInput::make('data.subheading')
                                                            ->label('Subheading'),
                                                        TextInput::make('data.search_placeholder')
                                                            ->label('Search input placeholder')
                                                            ->nullable(),
                                                        TextInput::make('data.cta_label')
                                                            ->label('Button label'),
                                                        TextInput::make('data.cta_url')
                                                            ->label('Button URL')
                                                            ->url(),
                                                        SpatieMediaLibraryFileUpload::make('hero_bg_image')
                                                            ->collection('section-hero-section')
                                                            ->label('Background image')
                                                            ->image()
                                                            ->imageEditor()
                                                            ->maxFiles(1)
                                                            ->columnSpanFull()
                                                            ->helperText('Save the page first before uploading.'),
                                                    ],

                                                    'about_snippet' => [
                                                        TextInput::make('data.label')
                                                            ->label('Label (e.g. About Us)'),
                                                        TextInput::make('data.heading')
                                                            ->label('Heading'),
                                                        Textarea::make('data.body')
                                                            ->label('Body text')
                                                            ->rows(4)
                                                            ->columnSpanFull(),
                                                        TextInput::make('data.stat_1_value')->label('Stat 1 value'),
                                                        TextInput::make('data.stat_1_label')->label('Stat 1 label'),
                                                        TextInput::make('data.stat_2_value')->label('Stat 2 value'),
                                                        TextInput::make('data.stat_2_label')->label('Stat 2 label'),
                                                        TextInput::make('data.stat_3_value')->label('Stat 3 value'),
                                                        TextInput::make('data.stat_3_label')->label('Stat 3 label'),
                                                        TextInput::make('data.stat_4_value')->label('Stat 4 value'),
                                                        TextInput::make('data.stat_4_label')->label('Stat 4 label'),
                                                        TextInput::make('data.cta_1_label')->label('CTA 1 label'),
                                                        TextInput::make('data.cta_1_url')->label('CTA 1 URL'),
                                                        TextInput::make('data.cta_1_desc')->label('CTA 1 description')->nullable(),
                                                        TextInput::make('data.cta_1_button')->label('CTA 1 button text')->nullable(),
                                                        TextInput::make('data.cta_2_label')->label('CTA 2 label'),
                                                        TextInput::make('data.cta_2_url')->label('CTA 2 URL'),
                                                        TextInput::make('data.cta_2_desc')->label('CTA 2 description')->nullable(),
                                                        TextInput::make('data.cta_2_button')->label('CTA 2 button text')->nullable(),
                                                        SpatieMediaLibraryFileUpload::make('about_snippet_image')
                                                            ->collection('section-about-snippet')
                                                            ->label('Section image')
                                                            ->image()
                                                            ->imageEditor()
                                                            ->maxFiles(1)
                                                            ->columnSpanFull()
                                                            ->helperText('Save the page first before uploading.'),
                                                    ],

                                                    'quote' => [
                                                        TextInput::make('data.heading')
                                                            ->label('Quote text'),
                                                        TextInput::make('data.attribution')
                                                            ->label('Attribution'),
                                                        SpatieMediaLibraryFileUpload::make('quote_bg_image')
                                                            ->collection('section-quote-banner')
                                                            ->label('Background image')
                                                            ->image()
                                                            ->imageEditor()
                                                            ->maxFiles(1)
                                                            ->columnSpanFull()
                                                            ->helperText('Save the page first before uploading.'),
                                                    ],

                                                    'text' => [
                                                        TextInput::make('data.heading')
                                                            ->label('Heading'),
                                                        TiptapEditor::make('data.body')
                                                            ->label('Body')
                                                            ->profile('default')
                                                            ->columnSpanFull(),
                                                    ],

                                                    'stats' => [
                                                        TextInput::make('data.label')
                                                            ->label('Label (e.g. Our Homes)')->nullable(),
                                                        TextInput::make('data.heading')
                                                            ->label('Section heading'),
                                                        TextInput::make('data.subheading')
                                                            ->label('Subheading'),
                                                        TextInput::make('data.learn_more_label')
                                                            ->label('Learn more label')->nullable(),
                                                        TextInput::make('data.learn_more_url')
                                                            ->label('Learn more URL')->nullable(),
                                                    ],

                                                    'team' => [
                                                        TextInput::make('data.heading')
                                                            ->label('Section heading'),
                                                        TextInput::make('data.subheading')
                                                            ->label('Subheading'),
                                                    ],

                                                    'projects' => [
                                                        TextInput::make('data.label')
                                                            ->label('Label (e.g. Projects)')->nullable(),
                                                        TextInput::make('data.heading')
                                                            ->label('Section heading'),
                                                        TextInput::make('data.subheading')
                                                            ->label('Subheading'),
                                                    ],

                                                    'services' => [
                                                        TextInput::make('data.label')
                                                            ->label('Label (e.g. Our Services)'),
                                                        TextInput::make('data.heading')
                                                            ->label('Section heading'),
                                                        Textarea::make('data.subheading')
                                                            ->label('Subheading')
                                                            ->rows(3)
                                                            ->columnSpanFull(),
                                                        SpatieMediaLibraryFileUpload::make('services_image')
                                                            ->collection('section-services-section')
                                                            ->label('Background image')
                                                            ->image()
                                                            ->imageEditor()
                                                            ->maxFiles(1)
                                                            ->columnSpanFull()
                                                            ->helperText('Save the page first before uploading.'),
                                                    ],

                                                    'press' => [
                                                        TextInput::make('data.label')
                                                            ->label('Label (e.g. Press)')->nullable(),
                                                        TextInput::make('data.heading')
                                                            ->label('Section heading'),
                                                        TextInput::make('data.subheading')
                                                            ->label('Subheading'),
                                                        TextInput::make('data.see_all_label')
                                                            ->label('See all label')->nullable(),
                                                        TextInput::make('data.see_all_url')
                                                            ->label('See all URL')->nullable(),
                                                    ],

                                                    'features' => [
                                                        TextInput::make('data.heading')
                                                            ->label('Section heading'),
                                                        TextInput::make('data.subheading')
                                                            ->label('Subheading'),
                                                        TextInput::make('data.quote_text')
                                                            ->label('Quote text')->nullable()->columnSpanFull(),
                                                        TextInput::make('data.quote_attribution')
                                                            ->label('Quote attribution')->nullable(),
                                                    ],

                                                    'cta' => [
                                                        TextInput::make('data.heading')
                                                            ->label('Heading'),
                                                        TextInput::make('data.subheading')
                                                            ->label('Subheading'),
                                                        TextInput::make('data.button_label')
                                                            ->label('Button label'),
                                                        TextInput::make('data.button_url')
                                                            ->label('Button URL'),
                                                    ],

                                                    'contact_form' => [
                                                        TextInput::make('data.label')
                                                            ->label('Label (e.g. Booking a Tour)')->nullable(),
                                                        TextInput::make('data.heading')
                                                            ->label('Heading'),
                                                        TextInput::make('data.subheading')
                                                            ->label('Subheading'),
                                                        Toggle::make('data.show_map')
                                                            ->label('Show map')
                                                            ->default(true),
                                                        SpatieMediaLibraryFileUpload::make('contact_form_image')
                                                            ->collection('section-contact-section')
                                                            ->label('Section image')
                                                            ->image()
                                                            ->imageEditor()
                                                            ->maxFiles(1)
                                                            ->columnSpanFull()
                                                            ->helperText('Save the page first before uploading.'),
                                                    ],

                                                    'contact_team' => [
                                                        TextInput::make('data.label')
                                                            ->label('Label (e.g. Contact Us)'),
                                                        TextInput::make('data.heading')
                                                            ->label('Heading'),
                                                        Textarea::make('data.subheading')
                                                            ->label('Subheading')
                                                            ->rows(3)
                                                            ->columnSpanFull(),
                                                    ],

                                                    'agent_form' => [
                                                        TextInput::make('data.heading')
                                                            ->label('Heading'),
                                                        TextInput::make('data.subheading')
                                                            ->label('Subheading'),
                                                        TiptapEditor::make('data.intro_text')
                                                            ->label('Intro text / Terms')
                                                            ->profile('default')
                                                            ->columnSpanFull(),
                                                        TextInput::make('data.form_label')
                                                            ->label('Form heading'),
                                                    ],

                                                    'about_intro' => [
                                                        TextInput::make('data.label')
                                                            ->label('Label (e.g. About us)')->nullable(),
                                                        TextInput::make('data.heading')
                                                            ->label('Heading')->nullable(),
                                                        Textarea::make('data.body')
                                                            ->label('Body (intro paragraph)')->rows(4)->nullable()->columnSpanFull(),
                                                    ],

                                                    'about_body' => [
                                                        Textarea::make('data.body')
                                                            ->label('Body (second paragraph)')->rows(4)->nullable()->columnSpanFull(),
                                                    ],

                                                    'about_mission' => [
                                                        TextInput::make('data.heading')
                                                            ->label('Heading')->nullable(),
                                                        Textarea::make('data.body')
                                                            ->label('Body')->rows(4)->nullable()->columnSpanFull(),
                                                    ],

                                                    'about_vision' => [
                                                        TextInput::make('data.heading')
                                                            ->label('Heading')->nullable(),
                                                        Textarea::make('data.body')
                                                            ->label('Body')->rows(4)->nullable()->columnSpanFull(),
                                                    ],

                                                    'about_awards' => [
                                                        TextInput::make('data.heading')
                                                            ->label('Heading')->nullable(),
                                                        Textarea::make('data.paragraph_1')
                                                            ->label('Paragraph 1')->rows(4)->nullable()->columnSpanFull(),
                                                        Textarea::make('data.paragraph_2')
                                                            ->label('Paragraph 2')->rows(4)->nullable()->columnSpanFull(),
                                                    ],

                                                    'about_creativity' => [
                                                        TextInput::make('data.label')
                                                            ->label('Label (e.g. More from Us)')->nullable(),
                                                        TextInput::make('data.heading')
                                                            ->label('Heading')->nullable(),
                                                        Textarea::make('data.body')
                                                            ->label('Body')->rows(5)->nullable()->columnSpanFull(),
                                                    ],

                                                    'about_stats' => [
                                                        Grid::make(4)->schema([
                                                            TextInput::make('data.stat_1_count')->label('Stat 1 count'),
                                                            TextInput::make('data.stat_1_title')->label('Stat 1 label'),
                                                            TextInput::make('data.stat_2_count')->label('Stat 2 count'),
                                                            TextInput::make('data.stat_2_title')->label('Stat 2 label'),
                                                            TextInput::make('data.stat_3_count')->label('Stat 3 count'),
                                                            TextInput::make('data.stat_3_title')->label('Stat 3 label'),
                                                            TextInput::make('data.stat_4_count')->label('Stat 4 count'),
                                                            TextInput::make('data.stat_4_title')->label('Stat 4 label'),
                                                        ]),
                                                        Grid::make(2)->schema([
                                                            TextInput::make('data.support_1_title')->label('Support 1 title'),
                                                            TextInput::make('data.support_1_desc')->label('Support 1 description'),
                                                            TextInput::make('data.support_1_button')->label('Support 1 button'),
                                                            TextInput::make('data.support_1_url')->label('Support 1 URL'),
                                                            TextInput::make('data.support_2_title')->label('Support 2 title'),
                                                            TextInput::make('data.support_2_desc')->label('Support 2 description'),
                                                            TextInput::make('data.support_2_button')->label('Support 2 button'),
                                                            TextInput::make('data.support_2_url')->label('Support 2 URL'),
                                                        ]),
                                                    ],

                                                    default => [
                                                        Placeholder::make('no_type')
                                                            ->label('')
                                                            ->content('Select a section type above to see its fields.'),
                                                    ],
                                                })
                                                ->collapsible()
                                                ->columns(2),
                                        ])
                                        ->reorderable()
                                        ->collapsible()
                                        ->collapsed()
                                        ->itemLabel(fn (array $state): string =>
                                            ($state['label'] ?? 'New section')
                                            . ' — '
                                            . ($state['type'] ?? 'no type')
                                        )
                                        ->addActionLabel('Add section')
                                        ->columnSpanFull(),
                                ]),
                        ]),

                    // ── SEO ────────────────────────────────────────────────
                    Tabs\Tab::make('SEO')
                        ->schema([
                            Section::make('Search engine optimisation')
                                ->schema([
                                    TextInput::make('meta_title')
                                        ->label('SEO title')
                                        ->maxLength(255)
                                        ->live(onBlur: true)
                                        ->helperText('Recommended: 50–60 characters.')
                                        ->hint(fn ($state): string => strlen($state ?? '') . ' / 60'),

                                    Textarea::make('meta_description')
                                        ->label('Meta description')
                                        ->rows(3)
                                        ->live(onBlur: true)
                                        ->helperText('Recommended: 120–160 characters.')
                                        ->hint(fn ($state): string => strlen($state ?? '') . ' / 160'),

                                    \Filament\Forms\Components\View::make('filament.forms.seo-preview')
                                        ->label('Google search preview')
                                        ->columnSpanFull(),
                                ]),
                        ]),

                    // ── Settings ───────────────────────────────────────────
                    Tabs\Tab::make('Settings')
                        ->schema([
                            Section::make('Page settings')
                                ->columns(2)
                                ->schema([
                                    Select::make('status')
                                        ->options(['draft' => 'Draft', 'published' => 'Published'])
                                        ->required()
                                        ->native(false)
                                        ->label('Status'),

                                    Select::make('template')
                                        ->options([
                                            'default' => 'Default',
                                            'home'    => 'Home',
                                            'contact' => 'Contact',
                                            'agent'   => 'Agent registration',
                                        ])
                                        ->required()
                                        ->native(false),

                                    TextInput::make('sort_order')
                                        ->label('Display order')
                                        ->numeric()
                                        ->default(0),

                                    Placeholder::make('system_indicator')
                                        ->label('System page')
                                        ->content(fn ($record): string => $record?->is_system
                                            ? 'This is a system page. It cannot be deleted.'
                                            : 'This page can be deleted.')
                                        ->visible(fn ($record): bool => $record !== null),
                                ]),
                        ]),

                ])
                ->columnSpanFull(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('sort_order')
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('slug')
                    ->prefix('/')
                    ->color('gray')
                    ->fontFamily('mono'),

                Tables\Columns\TextColumn::make('template')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'home'    => 'success',
                        'contact' => 'info',
                        'agent'   => 'warning',
                        default   => 'gray',
                    }),

                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'published' => 'success',
                        default     => 'gray',
                    }),

                Tables\Columns\TextColumn::make('sections_count')
                    ->label('Sections')
                    ->counts('sections'),

                Tables\Columns\IconColumn::make('is_system')
                    ->label('System')
                    ->boolean(),

                Tables\Columns\TextColumn::make('sort_order')
                    ->label('Order')
                    ->sortable(),

                Tables\Columns\TextColumn::make('updated_at')
                    ->since()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options(['draft' => 'Draft', 'published' => 'Published']),

                Tables\Filters\SelectFilter::make('template')
                    ->options([
                        'default' => 'Default',
                        'home'    => 'Home',
                        'contact' => 'Contact',
                        'agent'   => 'Agent registration',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),

                Tables\Actions\DeleteAction::make()
                    ->hidden(fn (Page $record): bool => $record->is_system),

                Tables\Actions\Action::make('duplicate')
                    ->icon('heroicon-m-document-duplicate')
                    ->label('Duplicate')
                    ->action(function (Page $record): void {
                        $newPage            = $record->replicate();
                        $newPage->title     = $record->title . ' (copy)';
                        $newPage->slug      = $record->slug . '-copy';
                        $newPage->status    = 'draft';
                        $newPage->is_system = false;
                        $newPage->save();

                        foreach ($record->sections as $section) {
                            $newSection          = $section->replicate();
                            $newSection->page_id = $newPage->id;
                            $newSection->save();
                        }

                        Notification::make()
                            ->title('Page duplicated')
                            ->success()
                            ->send();
                    })
                    ->requiresConfirmation(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\BulkAction::make('publish')
                        ->label('Publish selected')
                        ->icon('heroicon-m-check-circle')
                        ->action(fn (Collection $records) => $records->each->update(['status' => 'published']))
                        ->requiresConfirmation()
                        ->deselectRecordsAfterCompletion(),

                    Tables\Actions\BulkAction::make('draft')
                        ->label('Set to draft')
                        ->icon('heroicon-m-pencil')
                        ->action(fn (Collection $records) => $records->each->update(['status' => 'draft']))
                        ->requiresConfirmation()
                        ->deselectRecordsAfterCompletion(),

                    Tables\Actions\DeleteBulkAction::make()
                        ->action(function (Collection $records): void {
                            $records->reject(fn ($r) => $r->is_system)->each->delete();
                        }),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListPages::route('/'),
            'create' => Pages\CreatePage::route('/create'),
            'edit'   => Pages\EditPage::route('/{record}/edit'),
        ];
    }
}
