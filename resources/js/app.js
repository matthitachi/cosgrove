import './bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/app.scss'
import {createInertiaApp} from '@inertiajs/inertia-react'
import React from 'react'
import {createRoot} from 'react-dom/client';
import 'vite/modulepreload-polyfill';
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


createInertiaApp({

    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx', {eager: true})),

    setup({el, App, props}) {
        const root = createRoot(el);
        // root.render(React.createElement(App, props));
        root.render(
            React.createElement(
                GoogleReCaptchaProvider,
                { reCaptchaKey: "6LfaeYYqAAAAAMd-DCM2dJ9Sy0u5Dq5N0frQMLkO" }, // Props for the provider
                React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(App, props), // Your App component
                    React.createElement(ToastContainer, {
                        position: "top-right", // Customize ToastContainer props
                        autoClose: 5000,
                        hideProgressBar: false,
                        newestOnTop: false,
                        closeOnClick: true,
                        rtl: false,
                        pauseOnFocusLoss: true,
                        draggable: true,
                        pauseOnHover: true,
                    }),

                )
            )
    );
    },
}).then();
