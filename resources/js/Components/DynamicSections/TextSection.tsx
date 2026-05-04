import * as React from 'react';
import { ApiPage, ApiPageSection } from '../../types/cms';

interface Props {
    section: ApiPageSection;
    page: ApiPage;
}

interface TiptapNode {
    type: string;
    text?: string;
    content?: TiptapNode[];
    marks?: Array<{ type: string; attrs?: Record<string, unknown> }>;
    attrs?: Record<string, unknown>;
}

function tiptapToHtml(node: TiptapNode): string {
    if (!node) return '';
    const children = () => (node.content ?? []).map(tiptapToHtml).join('');
    const applyMarks = (text: string) => {
        let out = text;
        for (const mark of node.marks ?? []) {
            switch (mark.type) {
                case 'bold':      out = `<strong>${out}</strong>`; break;
                case 'italic':    out = `<em>${out}</em>`;         break;
                case 'underline': out = `<u>${out}</u>`;           break;
                case 'link':      out = `<a href="${mark.attrs?.href ?? '#'}">${out}</a>`; break;
            }
        }
        return out;
    };
    switch (node.type) {
        case 'doc':           return children();
        case 'paragraph':     return `<p>${children()}</p>`;
        case 'heading': {
            const lvl = (node.attrs?.level as number) ?? 2;
            return `<h${lvl}>${children()}</h${lvl}>`;
        }
        case 'text':          return applyMarks(node.text ?? '');
        case 'hardBreak':     return '<br>';
        case 'bulletList':    return `<ul>${children()}</ul>`;
        case 'orderedList':   return `<ol>${children()}</ol>`;
        case 'listItem':      return `<li>${children()}</li>`;
        case 'blockquote':    return `<blockquote>${children()}</blockquote>`;
        case 'horizontalRule':return '<hr>';
        case 'codeBlock':     return `<pre><code>${children()}</code></pre>`;
        default:              return children();
    }
}

function resolveBody(raw: unknown): string {
    if (typeof raw === 'string') return raw;
    if (raw && typeof raw === 'object' && (raw as TiptapNode).type === 'doc') {
        return tiptapToHtml(raw as TiptapNode);
    }
    return '';
}

export default function TextSection({ section }: Props) {
    const bodyHtml = resolveBody(section.data?.body);

    return (
        <section style={{ padding: '60px 0' }}>
            <div className="container">
                {section.data?.heading && (
                    <h2 className="headerDark mb-4">
                        {section.data.heading as string}
                    </h2>
                )}
                {bodyHtml && (
                    <div
                        className="textPrimary"
                        dangerouslySetInnerHTML={{ __html: bodyHtml }}
                    />
                )}
            </div>
        </section>
    );
}
