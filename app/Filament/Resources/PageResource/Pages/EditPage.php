<?php

namespace App\Filament\Resources\PageResource\Pages;

use App\Filament\Resources\PageResource;
use App\Models\PageSection;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPage extends EditRecord
{
    protected static string $resource = PageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make()
                ->hidden(fn (): bool => $this->record->is_system),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $data['sectionsData'] = $this->record
            ->sections()
            ->ordered()
            ->get()
            ->map(fn ($s) => [
                'id'         => (int) $s->id,
                'type'       => (string) $s->type,
                'label'      => (string) $s->label,
                'data'       => $s->data ?? [],
                'sort_order' => (int) $s->sort_order,
                'is_active'  => (bool) $s->is_active,
            ])
            ->toArray();

        return $data;
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        unset($data['sectionsData']);
        return $data;
    }

    protected function afterSave(): void
    {
        $sectionsData = $this->data['sectionsData'] ?? [];
        $existingIds  = [];

        foreach (array_values($sectionsData) as $index => $sectionData) {
            $section = isset($sectionData['id'])
                ? PageSection::find($sectionData['id'])
                : null;

            $section ??= new PageSection();

            $section->fill([
                'page_id'    => (int) $this->record->id,
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
            ])->save();

            $existingIds[] = $section->id;
        }

        $this->record
            ->sections()
            ->whereNotIn('id', $existingIds)
            ->delete();
    }
}
