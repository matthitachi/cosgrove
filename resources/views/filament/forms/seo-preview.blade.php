@php
    $title       = $getRecord()?->meta_title ?: $getRecord()?->title ?: 'Page title';
    $description = $getRecord()?->meta_description ?: 'Page description will appear here.';
    $slug        = $getRecord()?->slug ?? 'page-slug';
    $domain      = parse_url(config('app.url'), PHP_URL_HOST) ?? 'cosgroveafrica.com';
@endphp

<div style="font-family: arial, sans-serif; max-width: 600px; padding: 12px 0;">
    <div style="font-size: 12px; color: #202124; margin-bottom: 2px;">
        {{ $domain }} › {{ $slug }}
    </div>
    <div style="font-size: 20px; color: #1a0dab; margin-bottom: 3px;
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        {{ Str::limit($title, 60) }}
    </div>
    <div style="font-size: 14px; color: #4d5156; line-height: 1.58;">
        {{ Str::limit($description, 160) }}
    </div>
</div>
