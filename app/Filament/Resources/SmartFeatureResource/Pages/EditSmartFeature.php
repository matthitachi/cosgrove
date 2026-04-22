<?php

namespace App\Filament\Resources\SmartFeatureResource\Pages;

use App\Filament\Resources\SmartFeatureResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSmartFeature extends EditRecord
{
    protected static string $resource = SmartFeatureResource::class;

    protected function getHeaderActions(): array
    {
        return [Actions\DeleteAction::make()];
    }
}
