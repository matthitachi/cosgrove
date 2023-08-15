import './bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/app.scss'
import {createInertiaApp} from '@inertiajs/inertia-react'
import React from 'react'
import {createRoot} from 'react-dom/client';
import 'vite/modulepreload-polyfill';
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";


createInertiaApp({

    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx', {eager: true})),

    setup({el, App, props}) {
        const root = createRoot(el);
        root.render(React.createElement(App, props));
    },
}).then();
