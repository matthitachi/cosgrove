<?php

namespace App\Filament\Forms\Components;

use Filament\Forms\Components\Field;

class IconPickerField extends Field
{
    protected string $view = 'filament.forms.components.icon-picker-field';

    protected array $iconOptions = [];

    public function iconOptions(array $options): static
    {
        $this->iconOptions = $options;
        return $this;
    }

    public function getIconOptions(): array
    {
        return $this->iconOptions;
    }

    public function getViewData(): array
    {
        return array_merge(parent::getViewData(), [
            'iconOptions' => $this->getIconOptions(),
        ]);
    }
}
