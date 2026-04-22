<x-filament-widgets::widget>
    <x-filament::section heading="Recently updated content">
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-left">
                <thead>
                    <tr class="border-b border-gray-200 dark:border-white/10">
                        <th class="pb-3 pr-6 font-medium text-gray-500 dark:text-gray-400">Title</th>
                        <th class="pb-3 pr-6 font-medium text-gray-500 dark:text-gray-400">Type</th>
                        <th class="pb-3 pr-6 font-medium text-gray-500 dark:text-gray-400">Status</th>
                        <th class="pb-3 font-medium text-gray-500 dark:text-gray-400">Updated</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($this->getRecentItems() as $item)
                        <tr class="border-b border-gray-100 dark:border-white/5 last:border-0">
                            <td class="py-3 pr-6 text-gray-900 dark:text-white font-medium">
                                {{ $item['title'] }}
                            </td>
                            <td class="py-3 pr-6">
                                <span @class([
                                    'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium',
                                    'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200' => $item['type'] === 'Project',
                                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' => $item['type'] === 'Press',
                                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' => $item['type'] === 'Job',
                                ])>
                                    {{ $item['type'] }}
                                </span>
                            </td>
                            <td class="py-3 pr-6 text-gray-600 dark:text-gray-300 capitalize">
                                {{ $item['badge'] }}
                            </td>
                            <td class="py-3 text-gray-500 dark:text-gray-400">
                                {{ $item['updated_at']?->diffForHumans() }}
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="4" class="py-6 text-center text-gray-400">
                                No content yet.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </x-filament::section>
</x-filament-widgets::widget>
