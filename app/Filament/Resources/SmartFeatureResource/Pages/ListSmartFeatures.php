<?php

namespace App\Filament\Resources\SmartFeatureResource\Pages;

use App\Filament\Resources\SmartFeatureResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSmartFeatures extends ListRecords
{
    protected static string $resource = SmartFeatureResource::class;

    protected function getHeaderActions(): array
    {
        return [Actions\CreateAction::make()];
    }
}
