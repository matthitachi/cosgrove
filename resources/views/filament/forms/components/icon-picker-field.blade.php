@php
    $options   = $iconOptions;
    $statePath = $getStatePath();
@endphp

<x-filament-forms::field-wrapper
    :id="$getId()"
    :label="$getLabel()"
    :helper-text="$getHelperText()"
    :state-path="$statePath"
>
    <div
        x-data="{
            selected: @js($getState()),
            setState(key) {
                this.selected = key;
                $wire.set('{{ $statePath }}', key);
            }
        }"
        class="grid grid-cols-4 gap-3 p-1 sm:grid-cols-6 lg:grid-cols-8"
    >
        @foreach ($options as $option)
            <div
                x-on:click="setState('{{ $option['key'] }}')"
                :class="selected === '{{ $option['key'] }}'
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-950'
                    : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800'"
                class="fi-icon-picker-item relative flex flex-col items-center gap-2 cursor-pointer rounded-xl border-2 p-3 transition-all select-none"
            >
                <div class="fi-icon-picker-icon w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-200">
                    {!! file_get_contents(public_path('assets/images/features/' . $option['key'] . '.svg')) !!}
                </div>
                <span class="text-center text-xs leading-tight text-gray-600 dark:text-gray-400">
                    {{ $option['label'] }}
                </span>
                <div
                    x-show="selected === '{{ $option['key'] }}'"
                    class="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-primary-500"
                ></div>
            </div>
        @endforeach
    </div>
</x-filament-forms::field-wrapper>
