<?php

namespace App\Filament\Resources\PageResource\Pages;

use App\Filament\Resources\PageResource;
use Filament\Resources\Pages\CreateRecord;

class CreatePage extends CreateRecord
{
    protected static string $resource = PageResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        unset($data['sectionsData']);
        return $data;
    }

    protected function afterCreate(): void
    {
        $sectionsData = $this->data['sectionsData'] ?? [];

        foreach (array_values($sectionsData) as $index => $sectionData) {
            $this->record->sections()->create([
                'type'       => (string) ($sectionData['type'] ?? ''),
                'label'      => (string) ($sectionData['label'] ?? ''),
                'data'       => is_array($sectionData['data'] ?? null)
                                  ? $sectionData['data']
                                  : [],
                'sort_order' => $index + 1,
                'is_active'  => filter_var(
                                  $sectionData['is_active'] ?? true,
                                  FILTER_VALIDATE_BOOLEAN
                                ),
            ]);
        }
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('edit', ['record' => $this->record]);
    }
}
